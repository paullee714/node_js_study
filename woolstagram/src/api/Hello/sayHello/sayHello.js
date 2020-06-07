import {prisma} from "../../../../generated/prisma-client";

export default {
    Query:{
        sayHello: async () => {
            console.log(await prisma.users()); //prisma의 endpoint를 보호할수있다
            return "Hello";
        }
    }
}