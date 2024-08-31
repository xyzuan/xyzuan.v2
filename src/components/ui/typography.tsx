import { cn } from "@/lib/utils";
import React from "react";

const Typography = () => {
  return null;
};

const TypographyH1 = ({ children, className, ...props }: any) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
Typography.h1 = TypographyH1;

const TypographyH2 = ({ children, className, ...props }: any) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
Typography.h2 = TypographyH2;

const TypographyH3 = ({ children, className, ...props }: any) => {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
Typography.h3 = TypographyH3;

const TypographyH4 = ({ children, className, ...props }: any) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
Typography.h4 = TypographyH4;

const TypographyP = ({ children, className, ...props }: any) => {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  );
};
Typography.p = TypographyP;

const TypographyBlockquote = ({ children, className, ...props }: any) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
};
Typography.quote = TypographyBlockquote;

export default Typography;
