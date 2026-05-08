import LogoutButton from "@/components/logout";

export default function DashboardPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-10">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard! This page is protected and only accessible to authenticated users.</p>
            
            <LogoutButton />
        </div>
    )
}