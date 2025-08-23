"use client"
import Loading from "@/components/Loading/Loading"
import useDashboard from "@/hooks/useDashboard"
import { cn } from "@/lib/utils"
import { BugOff, Contact, Hammer, Layers, Users } from "lucide-react"
import Image from "next/image"


export default function Dashboard() {


    const { data, error, isFetching } = useDashboard()


    if (isFetching) return <Loading />
    if (error instanceof Error) return <div>{error.message}</div>



    return (
        <main>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex p-6 shadow-sm justify-between bg-[#41B167] text-white rounded-md">
                    <div>
                        <h4 className="text-lg">
                            {data?.data.clients.name}
                        </h4>
                        <p className="my-2 text-2xl font-medium">{data?.data.clients.total}</p>
                        <p>{data?.data.clients.changePercentage}% from last month</p>
                    </div>
                    <Users size={30} />
                </div>

                <div className="flex p-6 shadow-sm justify-between bg-[#1C398E] text-white rounded-md">
                    <div>
                        <h4 className="text-lg">
                            {data?.data.services.name}
                        </h4>
                        <p className="my-2 text-2xl font-medium">{data?.data.services.total}</p>
                        <div className="flex gap-2">
                            <p>Active: {data?.data.services.active}</p>
                            <span>|</span>
                            <p>Inactive: {data?.data.services.inactive}</p>
                        </div>
                    </div>
                    <Layers size={30} />
                </div>


                <div className="flex p-6 shadow-sm justify-between bg-[#F46C69] text-white rounded-md">
                    <div>
                        <h4 className="text-lg">
                            {data?.data.contacts.name}
                        </h4>
                        <p className="my-2 text-2xl font-medium">{data?.data.contacts.total}</p>
                        <p>Blocked: {data?.data.contacts.blockedContacts}</p>
                    </div>
                    <Contact size={30} />
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
                <div className="flex shadow-sm justify-between rounded p-6">
                    <div className="space-y-3">
                        <h5 className="text-2xl">{data?.data.tools.name}</h5>
                        <p className="font-bold text-4xl">{data?.data.tools.total}</p>
                    </div>
                    <Hammer color="#5B81E7" size={25} />
                </div>
                <div className="flex shadow-sm justify-between rounded p-6">
                    <div>
                        <h5 className="text-2xl">{data?.data.pests.name}</h5>
                        <p className="font-bold text-4xl">{data?.data.pests.total}</p>
                    </div>
                    <BugOff color="#F9A731" size={25} />
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3 overflow-auto">
                <div className="shadow-sm rounded p-3">
                    <h3 className="mb-3">Last 5 Clients</h3>
                    <div className="flex items-center justify-start gap-5">
                        {data?.data && data?.data.services.lastFiveServices.length > 0 ? (
                            data?.data.clients.lastFiveClients.map(item => (
                                <div key={item._id}>
                                    <div className="w-[45px] h-[45px] relative">
                                        <Image src={item.image} fill sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px" className="object-cover rounded" alt="client-img" />

                                    </div>
                                    <p className="text-sm mt-1">{item.company}</p>
                                </div>


                            ))) : (<p className="text-sm text-gray-500">No clients available</p>)}
                    </div>
                </div>
                <div className="shadow-sm rounded p-3">
                    <h3 className="mb-3">Last 5 Services</h3>
                    <div className="flex flex-col gap-3 max-h-[300px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        {data?.data && data?.data.services.lastFiveServices.length > 0 ? (
                            data?.data.services.lastFiveServices.map(service => (
                                <div key={service._id} className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <div className="relative w-[45px] h-[45px]">
                                            <Image
                                                src={service?.image || ""}
                                                fill
                                                sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px"
                                                className="rounded object-cover"
                                                alt="service-img"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm">{service.title}</p>
                                            <p className={cn("text-sm", service.status ? "text-green-500" : "text-red-500")}>{service.status ? "Active" : "Inactive"}</p>
                                        </div>
                                    </div>

                                    <p className="text-xs">{new Date(service.createdAt).toLocaleDateString("en-US")}</p>
                                </div>
                            ))
                        ) : (<p className="text-sm text-gray-500">No services available</p>)}

                    </div>
                </div>
            </div>

        </main>
    )
};