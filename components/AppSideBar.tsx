import {Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupAction, SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem, SidebarSeparator
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "./ui/collapsible";
const items = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        {
            title:"Inbox",
            url:"#",
            icon: Inbox,
        }
        ,{
            title:"Calendar",
            url:"#",
            icon: Calendar,
        },
        {
            title:"Search",
            url:'#',
            icon: Search,
        },
        {
            title:"Settings",
            url:"#",
            icon: Settings,


        }
    ]



        const AppSideBar = () => {
          return (
            <Sidebar collapsible="icon" >
                <SidebarHeader className='py-4'>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href='/'>
                                    <Image  src='/logo.svg'  alt='logo'  width={20} height={20}/>
                                    <span>Devmaniac</span>
                                </Link>

                            </SidebarMenuButton>

                        </SidebarMenuItem>
                    </SidebarMenu>

                </SidebarHeader>
                <SidebarSeparator></SidebarSeparator>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            Application
                        </SidebarGroupLabel>
                        <SidebarMenu>
                            {
                                items.map(item =>
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {item.title === "Inbox" && (
                                        <SidebarMenuBadge>
                                            12
                                        </SidebarMenuBadge>
                                    )}

                                </SidebarMenuItem>
                                )
                            }
                        </SidebarMenu>
                    </SidebarGroup>

                    {/*This one show how one can add actions to sidebar items*/}
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            Projects

                        </SidebarGroupLabel>
                        <SidebarGroupAction>
                            <Plus>
                                <span className='sr-only'>Add Project</span>
                            </Plus>
                        </SidebarGroupAction>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='/#'>
                                            <Projector />
                                            See all projects

                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='/#'>
                                            <Plus />
                                            Add Projects

                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>

                        </SidebarGroupContent>

                    </SidebarGroup>


                        {/*COLLAPSABLE*/}
                    {/* This is a collapsable dropdown menu for the sidebar*/}
                        <Collapsible defaultOpen className='group/collapsible'>
                            <SidebarGroup>

                            <SidebarGroupLabel asChild>
                                <CollapsibleTrigger>
                                    Collapsable Group
                                    <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'/>
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>


                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='/#'>
                                            <Projector />
                                            See all projects

                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='/#'>
                                            <Plus />
                                            Add Projects

                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>

                        </SidebarGroupContent>
                            </CollapsibleContent>
                    </SidebarGroup>
                    </Collapsible>


                    {/*Nested items*/}
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            Nested items

                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='/#'>
                                            <Projector />
                                            See all projects

                                        </Link>
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                                <Link href='/#'>
                                                    Add Project
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>

                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                                <Link href='/#'>
                                                    Add Category
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </SidebarMenuItem>

                            </SidebarMenu>

                        </SidebarGroupContent>

                    </SidebarGroup>



                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton>
                                        <User2/>
                                        John Doe
                                        <ChevronUp className='mr-auto' />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end'>
                                    <DropdownMenuItem>Account</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Sign Out</DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>

            </Sidebar>
          );
        };
    
        export default AppSideBar;