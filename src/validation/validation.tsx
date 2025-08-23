import zod from "zod";

export const LoginSchema = zod.object({
    email: zod.email(),
    password: zod.string().min(8),
})


export type LoginSchemaType = zod.infer<typeof LoginSchema>


export const addServiceSchema = zod.object({
    title: zod.string().min(3).max(1000),
    description: zod.string().min(30).max(10000),
    summary: zod.string().min(30).max(10000),
    image: zod.any().refine((files) => files?.length > 0, "Image is required"),
    status: zod.boolean(),
})

export type AddServiceSchemaType = zod.infer<typeof addServiceSchema>


export const EditServiceSchema = zod.object({
    title: zod.string().min(3).max(1000).optional(),
    description: zod.string().min(30).max(10000).optional(),
    summary: zod.string().min(30).max(10000).optional(),
    image: zod.any().optional(),
    status: zod.boolean().optional(),
})

export type EditServiceSchemaType = zod.infer<typeof EditServiceSchema>


export const addClientSchema = zod.object({

    image: zod.any().refine((files) => files?.length > 0, "Image is required"),
})

export type AddClientSchemaType = zod.infer<typeof addClientSchema>

export const EditClientSchema = zod.object({

    company: zod.string().min(3).max(20).optional(),
    description: zod.string().min(3).max(100).optional(),
    image: zod.any().optional(),
});

export type EditClientSchemaType = zod.infer<typeof EditClientSchema>


export const addToolSchema = zod.object({
    name: zod.string().min(3).max(100),
    image: zod.any().refine((files) => files?.length > 0, "Image is required"),
});

export type AddToolSchemaType = zod.infer<typeof addToolSchema>;


export const EditToolSchema = zod.object({
    name: zod.string().min(3).max(20).optional(),
    image: zod.any().optional(),
});

export type EditToolSchemaType = zod.infer<typeof EditToolSchema>


export const addPestSchema = zod.object({
    name: zod.string().min(3).max(20),
    description: zod.string().min(3).max(100),
    image: zod.any().refine((files) => files?.length > 0, "Image is required"),
});

export type AddPestSchemaType = zod.infer<typeof addPestSchema>

export const EditPestSchema = zod.object({
    name: zod.string().min(3).max(20).optional(),
    description: zod.string().min(3).max(100).optional(),
    image: zod.any().optional(),
});

export type EditPestSchemaType = zod.infer<typeof EditPestSchema>

export const BlockedContactSchema = zod.object({
    blocked: zod.boolean(),
});

export type BlockedContactSchemaType = zod.infer<typeof BlockedContactSchema>


export const contactSchema = zod.object({
    email: zod.email(),
    message: zod.string().min(3).max(1000),
    phone: zod.string().min(8).max(14),
    city: zod.string().min(3).max(100),
    blocked: zod.boolean()
});

export type ContactSchemaType = zod.infer<typeof contactSchema>;