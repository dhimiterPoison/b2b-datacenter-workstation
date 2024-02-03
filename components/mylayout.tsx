"use client"
import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable'
import { account, accountActions, defaultCollapsed, defaultLayout, navCollapsedSize } from '@/helper/mockdata'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import DWHubLogo from "@/public/dw-hub-logo.png"
import { Nav } from './nav'
import { Bell, Building2, Files, Target, Users } from 'lucide-react'
import { Separator } from './ui/separator'
import { AccountSwitcher } from './account-switcher'
import { LayoutProps } from '@/.next/types/app/layout'

const Layout = ({children} : LayoutProps) => {
	  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  return (
	<ResizablePanelGroup
	direction="horizontal"
	onLayout={(sizes: number[]) => {
	  document.cookie = `react-resizable-panels:layout=${JSON.stringify(
		sizes
	  )}`
	}}
	className="min-h-[100svh] items-stretch"
  >
	<ResizablePanel
	  defaultSize={defaultLayout[0]}
	  collapsedSize={navCollapsedSize}
	  collapsible={true}
	  minSize={15}
	  maxSize={20}
		  //@ts-ignore
	  onCollapse={(collapsed) => {
		setIsCollapsed(collapsed)
		document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
		  collapsed
		)}`
	  }}
	  className={cn(`flex flex-col min-h-full ${isCollapsed ? ' min-w-[50px] transition-all duration-300 ease-in-out' : ''}`)}
	>
	  <div className="logo px-8 py-4 flex justify-center">
		<Image src={DWHubLogo} alt="DW Hub Logo" className=""/>
	  </div>
	  <Nav
		isCollapsed={isCollapsed}
		// title="Anagraphics"
		links={[
		  {
			title: "Subjects",
			label: "4k", //TODO: Replace with actual count
			icon: Users,
			variant: "default",
		  },
		  {
			title: "Documents",
			label: "9", //TODO: Replace with actual count
			icon: Files,
			variant: "ghost",
		  },
		  {
			title: "Buildings",
			label: "3", //TODO: Replace with actual count
			icon: Building2,
			variant: "ghost",
		  },
		]}
	  />
	  <Separator />
	  <Nav
		isCollapsed={isCollapsed}
		// title="Core"
		links={[
		  {
			title: "Projects",
			label: "972",
			icon: Target,
			variant: "ghost",
		  },
		]}
	  />
	  <div className="flex grow"></div>
	  <Nav 
		isCollapsed={isCollapsed}
		// title="Actions"
		links={[
		  {
			title: "Notifications",
			icon: Bell,
			variant: "outline",
		  },
		]
		  }
	  />
	   <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
		<AccountSwitcher isCollapsed={isCollapsed} account={account} actions={accountActions} />
	  </div>
	  <Separator />
	</ResizablePanel>
	<ResizableHandle withHandle />
	<ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
		  {children}
	</ResizablePanel>
	</ResizablePanelGroup>

  )
}

export default Layout