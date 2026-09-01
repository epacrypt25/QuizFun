'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@/utils/supabase/client';

export interface Quiz {
    id: number;
    title_quiz: string;
    type_quiz: string | null;
    desc_quiz: string | null;
    created_at?: string;
}

interface QuizContextProps {
    quizzes: Quiz[];
    loading: boolean;
    fetchQuizzes: () => Promise<void>;
    createQuiz: (quizData: { title_quiz: string; type_quiz: string; desc_quiz: string }) => Promise<void>;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const supabase = createClient();
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchQuizzes = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('quiz')
                .select('*')
                .order('id', { ascending: false });

            if (error) throw error;
            if (data) setQuizzes(data as Quiz[]);
        } catch (err: any) {
            console.error('Gagal memuat kuis:', err.message);
        } finally {
            setLoading(false);
        }
    };

    const createQuiz = async (quizData: { title_quiz: string; type_quiz: string; desc_quiz: string }) => {
        try {
            const { error } = await supabase
                .from('quiz')
                .insert([quizData]);

            if (error) throw error;
            await fetchQuizzes();
        } catch (err: any) {
            throw new Error(`Gagal menyimpan kuis: ${err.message}`);
        }
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    return (
        <QuizContext.Provider value={{ quizzes, loading, fetchQuizzes, createQuiz }}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error('useQuizContext must be used within a QuizProvider');
    }
    return context;
};
