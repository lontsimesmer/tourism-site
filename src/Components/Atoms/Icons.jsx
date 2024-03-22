import styled from 'styled-components';
import {
  AiOutlineCar,
  AiOutlineCheckCircle,
  AiFillInstagram,
  AiOutlineLeftCircle,
  AiFillMail,
  AiFillPhone,
  AiOutlineRightCircle,
  AiFillCaretRight,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { FiChevronDown, FiThumbsUp } from 'react-icons/fi';
import { IoMdSend } from 'react-icons/io';
import { ImSearch } from 'react-icons/im';

export const Car = styled(AiOutlineCar)`
  color: #fff;
  cursor: pointer;
  font-size: 50px;
`;

export const Check = styled(AiOutlineCheckCircle)`
  color: #fff;
  cursor: pointer;
  font-size: 30px;
`;

export const Instagram = styled(AiFillInstagram)`
  color: #fff;
  cursor: pointer;
`;

export const leftCircle = styled(AiOutlineLeftCircle)`
  color: #fff;
  cursor: pointer;
  font-size: 25px;
`;

export const Mail = styled(AiFillMail)`
  color: #fff;
  cursor: pointer;
  font-size: 28px;
`;

export const Phone = styled(AiFillPhone)`
  color: #fff;
  cursor: pointer;
  font-size: 28px;
`;

export const rightCircle = styled(AiOutlineRightCircle)`
  color: #fff;
  cursor: pointer;
  font-size: 25px;
`;

export const Right = styled(AiFillCaretRight)`
  color: #c7923e;
  cursor: pointer;
`;

export const Twitter = styled(AiOutlineTwitter)`
  color: #fff;
  cursor: pointer;
`;

export const Facebook = styled(BiLogoFacebook)`
  color: #fff;
  cursor: pointer;
`;

export const Linkedin = styled(BiLogoLinkedin)`
  color: #fff;
  cursor: pointer;
`;

export const Down = styled(FiChevronDown)`
  color: #c7923e;
  cursor: pointer;
`;

export const Like = styled(FiThumbsUp)`
  color: #fff;
  cursor: pointer;
  font-size: 30px;
`;

export const Send = styled(IoMdSend)`
  color: #fff;
  cursor: pointer;
`;

export const Search = styled(ImSearch)`
  color: #fff;
  cursor: pointer;
`;
