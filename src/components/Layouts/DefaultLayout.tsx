import React, { useState, ReactNode, useEffect } from "react";
import Header from "../Common/Header";
import { AuthProvider, useAuth } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToolbarColumn } from "../../components/Common/Toolbar";
interface LayoutOptions {
    showToolbar?: boolean;
    showHeader?: boolean;
    maxWidth?: string;
    containerClass?: string;
}

interface DefaultLayoutProps {
    children: React.ReactNode;
    options?: LayoutOptions;
}

export default function DefaultLayout({
    children,
    options = {
        showToolbar: false,
        showHeader: true,
        maxWidth: '2xl:max-w-10xl',
        containerClass: ''
    }
}: DefaultLayoutProps) {
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
                    <div className="flex flex-col min-h-screen">
                        <div className="">
                            <ToolbarColumn visibility={options?.showToolbar} />
                        </div>
                        <main className="bg-light-blue flex-grow py-8 px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto sm:max-w-2xl md:max-w-6xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-10xl max-w-full w-full ">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
}
