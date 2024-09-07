"use client";

import { Project } from "@/commons/types/project.types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "@mdxeditor/editor/style.css";
import { z } from "zod";
import Editor from "@/components/ui/mdx-editor";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
});

type EditProjectFormProps = {
  project: Project;
};

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project }) => {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project.title,
      description: project.description,
    },
  });

  const onSubmit = (values: z.infer<typeof projectSchema>) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className="h-36" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* //TO-DO MD Editor */}
        {/* <Editor markdown={project.content} /> */}
      </form>
    </Form>
  );
};

export default EditProjectForm;
