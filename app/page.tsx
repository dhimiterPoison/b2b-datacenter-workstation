"use client"

	

interface DashboardProps {
	
  }


export default function Home({
  }: DashboardProps) {


  return (
    <div className="flex flex-col h-full gap-4">
      <h2 className="font-bold text-lg">Route title</h2>
      <div className="flex bg-green-100 w-full h-full"></div>
    </div>
  );
}
