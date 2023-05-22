'use client';``
export default function GlobalError({
    error}: {error: Error;}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
            <div className="flex flex-col items-center justify-center border">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-2xl">Page not found</p>
            </div>
        </main>
    )
}