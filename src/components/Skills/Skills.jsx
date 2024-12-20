import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSkills, addSkill } from "../../features/skills/skillsSlice";
import SkillForm from "./SkillForm/SkillForm";
import "./Skills.css";

function Skills({ isFormVisible }) {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.list.list);
  console.log(skills);
  useEffect(() => {
    dispatch(loadSkills());
  }, [dispatch]);

  const handleSkillFormSubmit = (values) => {
    dispatch(addSkill(values));
  };

  return (
    <div className="skills">
      {isFormVisible === true && (
        <SkillForm onSubmit={handleSkillFormSubmit}></SkillForm>
      )}
      {/* <div className="lines">
        {skills.map(
          (
            skill,
            index // Обратите внимание на изменение здесь
          ) => (
            <div
              key={index}
              className="skills-line"
              style={{ width: `${skill.skillRange}%` }}
            >
              {skill.skillName}
            </div>
          )
        )}
      </div> */}
      <div className="skills-level-underline">
        <div className="vertical-line-div">
          <div className="vertical-line"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="vertical-line-div">
          <div className="vertical-line"></div>
          <div className="vertical-line"></div>
        </div>
      </div>
      <div className="skills-level-line"></div>
      <div className="skills-level-underline">
        <div className="skills-level-divide">
          <p>Beginner</p>
          <p>Proficient</p>
        </div>
        <div className="skills-level-divide skills-level-divide2">
          <p>Expert</p>
          <p className="margin-left">Master</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
