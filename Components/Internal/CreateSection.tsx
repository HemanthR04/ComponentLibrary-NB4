import AnimationSection from "./AnimationSection";
import ComponentSectiopn from "./ComponentSection";

export default function CreateSection() {
    return (
        <>
            <div className="border">
              <ComponentSectiopn/>
              <AnimationSection/>
            </div>
        </>
    )
}