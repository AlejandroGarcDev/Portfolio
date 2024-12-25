import { Link } from "react-router-dom";
import { SkillModel } from "../models";
import { SiCplusplus } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";

const Skill: React.FC<SkillModel> = (skill) => {

    return(
        <div className="skill_container">
            <div className='icon_group'>
            <SiCplusplus style={{height:"90px", width: "90px"}}/>
            <SiVisualstudio style={{height:"90px", width: "90px"}}/>
            <FaGithub style={{height:"90px", width: "90px"}}/>
            <SiUnrealengine style={{height:"90px", width: "90px"}}/>
            </div>
        </div>
                    
    )
}

export default Skill;