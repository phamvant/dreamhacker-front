import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const HeroHeader = () => {
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">
            Landing pages made easy
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
            Easy to setup. Customizable. Quick. Responsive.
          </h2>
        </div>
        <Link
          href="https://github.com/phamvant/dreamhacker"
          target="_blank"
          className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          Get started
        </Link>
      </div>
      <div className="flex flex-1 justify-center lg:justify-end">
        <Image
          src={"/hero.png"}
          height={500}
          width={500}
          className="h-auto"
          alt="Header image"
        />
      </div>
    </section>
  );
};

export default HeroHeader;
