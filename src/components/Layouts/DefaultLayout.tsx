import React, { useState, ReactNode, useEffect } from "react";
import Header from "../Common/Header";
import { AuthProvider, useAuth } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if ((!isAuthenticated())) {
            navigate('/');
        }
    }, [navigate, token]);

    return (
        <AuthProvider>
            <div className="flex">
                <div className="relative flex flex-1 flex-col lg:ml-72.5">
                    <Header />
                    <div className="min-h-screen flex flex-col">
                        <main className="bg-light-blue flex-grow py-8">
                            <div className="mx-auto">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
}
