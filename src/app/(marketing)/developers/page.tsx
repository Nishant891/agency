import { AnimationContainer, MaxWidthWrapper, DevelopersCard } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";

const DevelopersPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                    <MagicBadge title="The Team" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    The Team Driving Innovation
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    A group of passionate creators, developers, and problem-solvers united by a shared vision to transform ideas into reality.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <DevelopersCard />
            </AnimationContainer>

        </MaxWidthWrapper>
    )
};

export default DevelopersPage
