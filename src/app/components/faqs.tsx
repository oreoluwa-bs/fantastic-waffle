import { MinusIcon } from "~/components/icons/minus";
import { PlusIcon } from "~/components/icons/plus";
import { StarsIcon } from "~/components/icons/stars";
import { UsersIcon } from "~/components/icons/users";
import { Badge } from "~/components/ui/badge";
import { SectionIcon } from "~/components/ui/section-icon";

const faqs = [
  {
    question: "What is DesignWhiz",
    answer:
      "To join DesignWhiz, simply visit our <a class='underline underline-offset-4' href='https://mydesignwhiz.com'>website</a> and sign up for an account. It's free and easy to get started! Join in now and get your money’s worth for 20% off.",
  },
  {
    question: "How does DesignWhiz works?",
    answer:
      "To join DesignWhiz, simply visit our <a class='underline underline-offset-4' href='https://mydesignwhiz.com'>website</a> and sign up for an account. It's free and easy to get started! Join in now and get your money’s worth for 20% off.",
  },
  {
    question: "What are the benefits of DesignWhiz Pro?",
    answer:
      "To join DesignWhiz, simply visit our <a class='underline underline-offset-4' href='https://mydesignwhiz.com'>website</a> and sign up for an account. It's free and easy to get started! Join in now and get your money’s worth for 20% off.",
  },
  {
    question: "How do I upgrade to DsgnWhiz Pro?",
    answer:
      "To join DesignWhiz, simply visit our <a class='underline underline-offset-4' href='https://mydesignwhiz.com'>website</a> and sign up for an account. It's free and easy to get started! Join in now and get your money’s worth for 20% off.",
  },
  {
    question: "Can I cancel my DsgnWhiz Pro subscription?",
    answer:
      "To join DesignWhiz, simply visit our <a class='underline underline-offset-4' href='https://mydesignwhiz.com'>website</a> and sign up for an account. It's free and easy to get started! Join in now and get your money’s worth for 20% off.",
  },
];

export function FAQs() {
  return (
    <section className="relative isolate">
      <div className="relative z-0">
        <div className="flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-[620px]">
            <div className="text-center" data-animation="fade-in-up">
              <Badge className="badge-border-gradient">
                <StarsIcon />
                <span className="text-gradient">FAQs</span>
              </Badge>
            </div>
            <h2
              data-animation="fade-in-up"
              className="text-3xl md:text-4xl   lg:text-5xl text-center font-medium mt-2 mb-4 lg:leading-[57.2px] tracking-tighter"
            >
              We have
              <span className="align-middle px-4">
                <SectionIcon>
                  <UsersIcon />
                </SectionIcon>
              </span>
              answers to your questions.
            </h2>
            <p
              data-animation="fade-in-up"
              className="md:text-lg max-w-[480px] mx-auto  text-center"
            >
              Clear, insightful, and helpful responses to ensure you get the
              information you need.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-14">
        <ul className="space-y-4 max-w-screen-md mx-auto">
          {faqs.map((qa, idx) => {
            return (
              <li key={idx} className="faq-item" data-animation="fade-in-up">
                <details
                  className="bg-background rounded-xl overflow-hidden group"
                  key={idx}
                >
                  <summary className="justify-between items-center flex gap-4 p-5 cursor-pointer">
                    <h3 className="tracking-tight font-medium flex-1 text-[#1B0947]">
                      {qa.question}
                    </h3>
                    <span className="flex-shrink-0">
                      <span className="transition-all opacity-0 group-open:opacity-100">
                        <MinusIcon />
                      </span>
                      <span className="transition-all opacity-100 group-open:opacity-0">
                        <PlusIcon />
                      </span>
                    </span>
                  </summary>
                  <div
                    className="faq-item__content p-5 pt-0 text-[#1B0947B2]"
                    dangerouslySetInnerHTML={{ __html: qa.answer }}
                  />
                </details>
              </li>
            );
          })}
        </ul>
        <div
          data-animation="fade-in-up"
          className="text-center text-sm tracking-tighter mt-10"
        >
          Have more questions?{" "}
          <a href="#" className="text-[#7421FC]">
            Get Help
          </a>
        </div>
      </div>
    </section>
  );
}
