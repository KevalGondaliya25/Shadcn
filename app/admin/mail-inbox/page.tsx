"use client";
import React, { useState } from "react";
import {
    formatDistanceToNow,
    addDays,
    endOfWeek,
    startOfWeek,
    format,
} from "date-fns";
import Link from "next/link";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Triangle,
    Inbox,
    File,
    Send,
    ArchiveX,
    Trash2,
    Archive,
    UsersRound,
    CircleAlert,
    MessagesSquare,
    ShoppingCart,
    EllipsisVertical,
    Clock,
    Forward,
    ReplyAll,
    Reply,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const MailInbox: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());

    const mail: Array<mailType> = [
        {
            icon: <Triangle className="h-4 w-4 opacity-50" />,
            mail: "alice@example.com",
            name: "Alice Koac",
        },
        {
            icon: <Triangle className="h-4 w-4 opacity-50" />,
            mail: "Bbais@example.com",
            name: "Baic Koac",
        },
        {
            icon: <Triangle className="h-4 w-4 opacity-50" />,
            mail: "smith@example.com",
            name: "Smith Koac",
        },
    ];

    const navBar: Array<navType> = [
        {
            icon: <Inbox absoluteStrokeWidth className="h-4 w-4" />,
            count: 128,
            name: "Inbox",
            separator: false,
        },
        {
            icon: <File absoluteStrokeWidth className="h-4 w-4" />,
            count: 9,
            name: "Draft",
            separator: false,
        },
        {
            icon: <Send absoluteStrokeWidth className="h-4 w-4" />,
            count: 0,
            name: "Sent",
            separator: false,
        },
        {
            icon: <ArchiveX absoluteStrokeWidth className="h-4 w-4" />,
            count: 23,
            name: "Junk",
            separator: false,
        },
        {
            icon: <Trash2 absoluteStrokeWidth className="h-4 w-4" />,
            count: 0,
            name: "Trash",
            separator: false,
        },
        {
            icon: <Archive absoluteStrokeWidth className="h-4 w-4" />,
            count: 0,
            name: "Archive",
            separator: true,
        },
        {
            icon: <UsersRound absoluteStrokeWidth className="h-4 w-4" />,
            count: 972,
            name: "Social",
            separator: false,
        },
        {
            icon: <CircleAlert absoluteStrokeWidth className="h-4 w-4" />,
            count: 342,
            name: "Updates",
            separator: false,
        },
        {
            icon: <MessagesSquare absoluteStrokeWidth className="h-4 w-4" />,
            count: 128,
            name: "Forums",
            separator: false,
        },
        {
            icon: <ShoppingCart absoluteStrokeWidth className="h-4 w-4" />,
            count: 8,
            name: "Shopping",
            separator: false,
        },
        {
            icon: <Archive absoluteStrokeWidth className="h-4 w-4" />,
            count: 21,
            name: "Promotions",
            separator: false,
        },
    ];

    const mailsData: Array<mailPayloadType> = [
        {
            id: 1,
            name: "William Smith",
            email: "williamsmith@example.com",
            time: "Oct 22, 2023, 9:00:00 AM",
            subject: "Meeting Tomorrow",
            isRead: true,
            body: (
                <>
                    <div>
                        Hi, let&apos;s have a meeting tomorrow to discuss the
                        project. I&apos;ve been reviewing the project details
                        and have some ideas I&apos;d like to share. It&apos;s
                        crucial that we align on our next steps to ensure the
                        project&apos;s success.
                    </div>
                    <div>
                        Please come prepared with any questions or insights you
                        may have. Looking forward to our meeting!
                    </div>
                    <div>Best regards, William</div>
                </>
            ),
            tags: [
                {
                    text: "meeting",
                    variant: "default",
                },
                {
                    text: "work",
                    variant: "secondary",
                },
                {
                    text: "important",
                    variant: "outline",
                },
            ],
        },
        {
            id: 2,
            name: "Alice Smith",
            email: "alicesmith@example.com",
            time: "Oct 22, 2022, 9:00:00 AM",
            subject: "Project Update",
            isRead: false,
            body: (
                <>
                    <div>
                        Thank you for the project update. It looks great!
                        I&apos;ve gone through the report, and the progress is
                        impressive. The team has done a fantastic job, and I
                        appreciate the hard work everyone has put in.
                    </div>
                    <div>
                        I have a few minor suggestions that I&apos;ll include in
                        the attached document.
                    </div>
                    <div>
                        I have a few minor suggestions that I&apos;ll include in
                        the attached document.
                    </div>
                    <div>Best regards, Alice</div>
                </>
            ),
            tags: [
                {
                    text: "work",
                    variant: "secondary",
                },
                {
                    text: "important",
                    variant: "outline",
                },
            ],
        },
    ];
    const [mailData, setMailData] = useState<mailPayloadType | null>(null);

    const [mailDropDown, setMailDropDown] = useState<string>(mail[0].name);
    return (
        <>
            <ResizablePanelGroup
                direction="horizontal"
                className="rounded-lg border w-full"
            >
                <ResizablePanel defaultSize={18} className="max-w-[300px]">
                    <div className="flex flex-col h-full w-full items-center">
                        <div className="p-2 w-full">
                            <Select
                                onValueChange={setMailDropDown}
                                value={mailDropDown}
                            >
                                <SelectTrigger className="border border-black">
                                    <SelectValue placeholder="Select a email" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {mail.map(
                                            (
                                                mailPayload: mailType,
                                                index: number
                                            ) => (
                                                <SelectItem
                                                    key={index}
                                                    value={mailPayload.name}
                                                >
                                                    <div className="flex items-center">
                                                        {mailPayload.icon}{" "}
                                                        <span className="pl-2">
                                                            {mailPayload.mail}
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Separator />
                        <div className="flex-1 w-full py-2">
                            <div className="grid items-start text-sm font-medium">
                                {navBar.map(
                                    (navBarPayload: navType, index: number) => (
                                        <>
                                            <Link
                                                href="#"
                                                key={index}
                                                className={`flex items-center gap-3 rounded-lg px-3 py-2 my-0.5 mx-2 transition-all ${
                                                    index === 0
                                                        ? "bg-black dark:bg-white dark:text-black text-white"
                                                        : "hover:bg-[#F5F5F5] hover:dark:bg-[#262626] hover:dark:text-white"
                                                }`}
                                            >
                                                {navBarPayload.icon}
                                                {navBarPayload.name}
                                                {navBarPayload.count > 0 && (
                                                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                                        {navBarPayload.count}
                                                    </span>
                                                )}
                                            </Link>
                                            {navBarPayload.separator && (
                                                <Separator />
                                            )}
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle className="text-slate-500" />
                <ResizablePanel defaultSize={32}>
                    <div className="h-full w-full">
                        <Tabs defaultValue="all_mail">
                            <div className="flex justify-between items-center px-4 py-2">
                                <span className="text-xl font-bold">Inbox</span>
                                <TabsList className="grid grid-cols-2">
                                    <TabsTrigger value="all_mail">
                                        All Mail
                                    </TabsTrigger>
                                    <TabsTrigger value="unread">
                                        Unread
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                            <Separator />
                            <TabsContent value="all_mail">
                                <div className="p-4 flex flex-col gap-2">
                                    {mailsData.map(
                                        (
                                            data: mailPayloadType,
                                            index: number
                                        ) => (
                                            <button
                                                key={index}
                                                className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                                                onClick={() =>
                                                    setMailData(data)
                                                }
                                            >
                                                <div className="flex w-full flex-col gap-1">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center gap-2">
                                                            <div className="font-semibold">
                                                                {data.name}
                                                            </div>
                                                            {!data.isRead && (
                                                                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                                                            )}
                                                        </div>
                                                        <div className="ml-auto text-xs text-muted-foreground">
                                                            {formatDistanceToNow(
                                                                new Date(
                                                                    data.time
                                                                ),
                                                                {
                                                                    addSuffix:
                                                                        true,
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="text-xs font-medium">
                                                        {data.subject}
                                                    </div>
                                                </div>
                                                <div className="line-clamp-2 text-xs text-muted-foreground">
                                                    {data.body}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {data.tags.map(
                                                        (tag, index) => (
                                                            <Badge
                                                                key={index}
                                                                className="rounded-md"
                                                                variant={
                                                                    tag.variant
                                                                }
                                                            >
                                                                {tag.text}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </button>
                                        )
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="unread">
                                <div className="p-4 flex flex-col gap-2">
                                    {mailsData
                                        .filter(
                                            (data: mailPayloadType) =>
                                                !data.isRead
                                        )
                                        .map(
                                            (
                                                data: mailPayloadType,
                                                index: number
                                            ) => (
                                                <button
                                                    key={index}
                                                    className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                                                    onClick={() =>
                                                        setMailData(data)
                                                    }
                                                >
                                                    <div className="flex w-full flex-col gap-1">
                                                        <div className="flex items-center">
                                                            <div className="flex items-center gap-2">
                                                                <div className="font-semibold">
                                                                    {data.name}
                                                                </div>
                                                                {!data.isRead && (
                                                                    <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                                                                )}
                                                            </div>
                                                            <div className="ml-auto text-xs text-muted-foreground">
                                                                {formatDistanceToNow(
                                                                    new Date(
                                                                        data.time
                                                                    ),
                                                                    {
                                                                        addSuffix:
                                                                            true,
                                                                    }
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="text-xs font-medium">
                                                            {data.subject}
                                                        </div>
                                                    </div>
                                                    <div className="line-clamp-2 text-xs text-muted-foreground">
                                                        {data.body}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {data.tags.map(
                                                            (tag, index) => (
                                                                <Badge
                                                                    key={index}
                                                                    className="rounded-md"
                                                                    variant={
                                                                        tag.variant
                                                                    }
                                                                >
                                                                    {tag.text}
                                                                </Badge>
                                                            )
                                                        )}
                                                    </div>
                                                </button>
                                            )
                                        )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle className="text-slate-500" />
                {mailData && (
                    <ResizablePanel defaultSize={50}>
                        <div className="h-full w-full">
                            <div className="flex justify-between w-full items-center py-2">
                                <div className="flex items-center">
                                    {[
                                        {
                                            icons: (
                                                <Archive
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            ),
                                            content: "Archive",
                                            separator: false,
                                        },
                                        {
                                            icons: (
                                                <ArchiveX
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            ),
                                            content: "Move to junk",
                                            separator: false,
                                        },
                                        {
                                            icons: (
                                                <Trash2
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            ),
                                            content: "Move to trash",
                                            separator: true,
                                        },
                                    ].map((mailbar, index) => (
                                        <>
                                            <TooltipProvider
                                                delayDuration={100}
                                                key={index}
                                            >
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div className="p-2 hover:bg-gray-100 m-1 rounded">
                                                            {mailbar.icons}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{mailbar.content}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            {mailbar.separator && (
                                                <Separator
                                                    orientation="vertical"
                                                    className="!h-[22px]"
                                                />
                                            )}
                                        </>
                                    ))}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className="p-2 hover:bg-gray-100 m-1 rounded">
                                                <Clock
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="flex w-full">
                                            <div className="border-r p-2 px-4 w-60">
                                                <DropdownMenuLabel>
                                                    Snooze until
                                                </DropdownMenuLabel>
                                                <DropdownMenuGroup>
                                                    {[
                                                        {
                                                            label: "Later today",
                                                            time: new Date(),
                                                        },
                                                        {
                                                            label: "Tomorrow",
                                                            time: addDays(
                                                                new Date(),
                                                                1
                                                            ),
                                                        },
                                                        {
                                                            label: "This weekend",
                                                            time: endOfWeek(
                                                                new Date(),
                                                                {
                                                                    weekStartsOn: 0,
                                                                }
                                                            ),
                                                        },
                                                        {
                                                            label: "Next week",
                                                            time: addDays(
                                                                startOfWeek(
                                                                    new Date(),
                                                                    {
                                                                        weekStartsOn: 0,
                                                                    }
                                                                ),
                                                                7
                                                            ),
                                                        },
                                                    ].map((time, index) => (
                                                        <DropdownMenuItem
                                                            className="flex justify-between"
                                                            key={index}
                                                            onClick={() =>
                                                                setDate(
                                                                    time.time
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                {time.label}
                                                            </span>
                                                            <span>
                                                                {format(
                                                                    time.time,
                                                                    "EEE, h:mm a"
                                                                )}
                                                            </span>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuGroup>
                                            </div>
                                            <div className="p-2 px-4">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={(
                                                        day,
                                                        selectedDay
                                                    ) => setDate(selectedDay)}
                                                    initialFocus
                                                />
                                            </div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className="flex items-center">
                                    {[
                                        {
                                            icons: (
                                                <Reply
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            ),
                                            content: "Reply",
                                            separator: false,
                                        },
                                        {
                                            icons: (
                                                <ReplyAll
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            ),
                                            content: "Reply all",
                                            separator: false,
                                        },
                                        {
                                            icons: (
                                                <Forward
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            ),
                                            content: "Forward",
                                            separator: true,
                                        },
                                    ].map((mailbar, index) => (
                                        <>
                                            <TooltipProvider
                                                delayDuration={100}
                                                key={index}
                                            >
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div className="p-2 hover:bg-gray-100 m-1 rounded">
                                                            {mailbar.icons}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{mailbar.content}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            {mailbar.separator && (
                                                <Separator
                                                    orientation="vertical"
                                                    className="!h-[22px]"
                                                />
                                            )}
                                        </>
                                    ))}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className="p-2 hover:bg-gray-100 m-1 rounded">
                                                <EllipsisVertical
                                                    absoluteStrokeWidth
                                                    className="h-4 w-4"
                                                />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="flex w-full">
                                            <DropdownMenuGroup>
                                                {[
                                                    "Mark as unread",
                                                    "Star thread",
                                                    "Add label",
                                                    "Mute thread",
                                                ].map((label, index) => (
                                                    <DropdownMenuItem
                                                        className="flex justify-between"
                                                        key={index}
                                                    >
                                                        <span>{label}</span>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <Separator />
                            <div className="flex p-4">
                                <div className="flex items-start gap-4 text-xs w-full">
                                    <Avatar>
                                        <AvatarImage src="" alt="CN" />
                                        <AvatarFallback>
                                            {mailData.name
                                                .split(" ")
                                                .map((text) =>
                                                    text[0].toUpperCase()
                                                )
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-xs font-semibold">
                                            {mailData.name}
                                        </div>
                                        <div>{mailData.subject}</div>
                                        <div className="font-semibold">
                                            Reply-To :{" "}
                                            <span className="font-normal">
                                                {mailData.email}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs w-full text-right">
                                    {mailData.time}
                                </div>
                            </div>
                            <Separator />
                            <div className="text-sm p-4">{mailData.body}</div>
                            <div
                                className="absolute bottom-0"
                                style={{
                                    width: "-webkit-fill-available",
                                }}
                            >
                                <Separator />
                                <div className="p-4">
                                    <Textarea
                                        placeholder={`Reply ${mailData.name}...`}
                                    />
                                </div>
                                <div className="flex justify-between p-4">
                                    <div className="flex gap-2 items-center">
                                        <Switch id="airplane-mode" />
                                        <Label
                                            htmlFor="airplane-mode"
                                            className="text-xs"
                                        >
                                            Mute this thread
                                        </Label>
                                    </div>
                                    <Button>Send</Button>
                                </div>
                            </div>
                        </div>
                    </ResizablePanel>
                )}
            </ResizablePanelGroup>
        </>
    );
};

export default MailInbox;

type mailType = {
    icon: React.ReactNode;
    mail: string;
    name: string;
};

type navType = {
    icon: React.ReactNode;
    count: number;
    name: string;
    separator: boolean;
};

type mailPayloadType = {
    id: number;
    name: string;
    email: string;
    time: string;
    isRead: boolean;
    subject: string;
    body: React.ReactNode;
    tags: Array<{
        text: string;
        variant: "default" | "secondary" | "outline" | "destructive";
    }>;
};
