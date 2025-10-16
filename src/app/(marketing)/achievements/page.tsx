import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Achievements } from "@/components/achivements";
import MagicBadge from "@/components/ui/magic-badge";

const DevelopersPage = () => {
  return (
    <MaxWidthWrapper className="mb-40">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
          <MagicBadge title="Achievements" />
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
             Our Journey So Far{" "}
          </h1>
          <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
            From college dorms to Bangalore's tech scene - milestones that shaped us{" "}
          </p>
        </div>
      </AnimationContainer>

      <AnimationContainer delay={0.2}>
        <Achievements />
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default DevelopersPage;
