import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Search = ({ className, ...props }: Props) => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className={cn("sm:w-[100px] md:w-[300px]", className)}
      />
    </div>
  );
};

export default Search;
