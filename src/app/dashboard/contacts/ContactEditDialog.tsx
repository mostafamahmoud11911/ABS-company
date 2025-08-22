import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { useBlockedContact } from "@/hooks/useBlockedContact"
import { Contacts } from "@/types/types"
import { BlockedContactSchema, BlockedContactSchemaType } from "@/validation/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

export default function ContactEditDialog({ contact }: { contact: Contacts }) {
    const form = useForm<BlockedContactSchemaType>({
        resolver: zodResolver(BlockedContactSchema),
        defaultValues: {
            blocked: contact.blocked,
        },
    })
    const mutation = useBlockedContact();

    const onSubmit: SubmitHandler<BlockedContactSchemaType> = (data) => {

        mutation.mutate({ data: data.blocked, id: contact._id });

    }


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="blocked"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={(value) => {
                                            field.onChange(value);
                                            form.handleSubmit(onSubmit)();
                                        }}
                                        aria-readonly
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}
