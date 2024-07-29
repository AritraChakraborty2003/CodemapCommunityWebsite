import Footer from "./Footer";
import { NavbarCMS } from "./NavbarCMS";

const InternScore = () => {
  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>
      <div className="h-[60vmin] gap-y-3 flex flex-col justify-center items-center">
        <p className="text-3xl font-bold pb-2 mt-3">Score is calculated as: </p>
        <p className="text-xl font-medium">
          score = meeting_attendance*3 + deadline_task_completion*5+ test_scores
        </p>

        <p className="mt-10  text-3xl font-bold pb-2">Will be announced soon</p>
      </div>
      <Footer />
    </>
  );
};
export { InternScore };
