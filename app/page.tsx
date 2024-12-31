'use client';

import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import MainLayout from '../components/layout/MainLayout';

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="large" />
        </div>
      }>
        <div className="bg-gray-50 dark:bg-dark-bg">
          <MainLayout />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}