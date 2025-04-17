import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>

      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
