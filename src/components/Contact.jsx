import React from "react";
import { assets } from "../../public/assets/assets";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
// const accessKey = import.meta.env.VITE_ACCESS_KEY;

//

const Contact = () => {
  // form submit

  const [result, setResult] = React.useState("");
  const [disable, setDisable] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setDisable(true);
    const formData = new FormData(event.target);

    // Add your access key
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    // Use toast.promise to handle promise states
    toast
      .promise(
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        }).then(async (response) => {
          const data = await response.json();
          setDisable(false);
          if (!data.success) {
            throw new Error(data.message);
          }
          return data;
        }),
        {
          pending: "Sending your message...",
          success: "Message sent successfully! 🎉",
          error: "Error submitting the form. Please try again. 🚨",
        }
      )
      .then(() => {
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "280c3e77-e8bf-4756-b90c-682457531bbd");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("");
  //     toast.success("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     toast.error(data.message);
  //     setResult("");
  //   }
  // };

  // form submit
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="  mx-auto my-20 container p-14 md:px-24 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl text-center sm:text-4xl font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          With Us
        </span>
      </h1>
      <p className="text-grey-500 text-center mx-auto max-w-80 text-gray-400 mb-8 ">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col  gap-6">
          <div className="md:flex-row flex flex-col gap-6 items-center justify-between">
            <div className="flex w-full flex-col  gap-1">
              <span className="text-sm">You Name</span>
              <input
                className="border p-2 outline-none focus:bg-none rounded-md shadow-sm"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </div>
            <div className="flex flex-col w-full  gap-1">
              <span className="text-sm">Your Email</span>
              <input
                className="border p-2 rounded-md shadow-sm outline-none focus:bg-none"
                type="email"
                placeholder="Email"
                required
                name="Email"
              />
            </div>
          </div>
          <div className="flex w-full flex-col  gap-1">
            <span className="text-sm">Your Message</span>
            <textarea
              className="border p-2 rounded-md shadow-sm h-40 outline-none focus:bg-none"
              type="text"
              placeholder="Message"
              cols={50}
              required
              name="Message"
            />
          </div>
          <button
            disabled={disable}
            className="bg-blue-600 w-fit mx-auto text-white px-8 py-2 rounded-sm
        "
            // type="submit"
          >
            {result ? result : "Send message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
