import React from "react";

function About() {
  return (
    <div className="aligh-elements shadow-2xl w-[850px] p-10 mt-10 rounded-xl ">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/200/300"
            className="w-[130px] h-[130px] rounded-full "
            alt=""
          />
        </div>
        <p className="text-center mt-4 text-bold text-[20px]">My Name is Javohir</p>
        <p className="text-center mt-2 text-bold text-[20px]">Contact : <span className="underline cursor-pointer">@Kakhramonov</span></p>
        <p className="text-center mt-2 text-bold text-[16px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque consectetur numquam molestias, quibusdam qui rerum ex nobis porro ea ullam. Adipisci itaque quam doloribus repellendus, ipsa eos aliquid molestiae maxime impedit, modi cupiditate, laboriosam vel excepturi. Esse nulla harum maxime nemo, eum quaerat qui consequatur animi officia quam, ipsa quasi vel doloribus?</p>
      </div>
    </div>
  );
}

export default About;
