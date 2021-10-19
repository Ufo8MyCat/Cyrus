import axios from 'axios'
import * as Constans from '../contstans/urls'

type UserInfo = {
  reputation: number,
  profile_image: string,
  accept_rate: number,
  display_name: string
} 

type UserData = {
  data: {
      items: Array<UserInfo>
  }
}

type QuestionData = {
  link?: string
}

type UserQuestions = {
  data: {
    items: Array<QuestionData | never> 
  }
}

export const getQuestionById = async (id: string) : Promise<UserQuestions>=> {
    try {
      const res: UserQuestions = await axios.get(Constans.stackOverFlowQuestionsUrl.replace('{id}', `${id}`))
      return res
    } catch (error) {
      throw new Error("not found");
    } 
}

export const getUserDataById = async (id: string): Promise<UserData | undefined>=> {
  try {
    const res: UserData = await axios.get(Constans.stackOverFlowUserData.replace('{id}', `${id}`))
    return res
  } catch (error) {
    throw new Error("not found");
  } 
}