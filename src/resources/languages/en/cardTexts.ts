import { cardData } from "../../../models/cardData.type";
import { cardType } from "../../../models/cardType.type";

export const cardTexts: Record<cardType, cardData> = {
    chat: {
        title: "Chatroom",
        description: "Be connected to your friends!",
        buttonText: "Chat",
        buttonLink: "/chat",
        notification: "1 new!",
    },
    forum: {
        title: "Forum",
        description: "To discuss important things",
        buttonText: "Enter",
        buttonLink: "/forum",
    },
    games: {
        title: "Games",
        description: "To have fun together",
        buttonText: "Let's Go!",
        buttonLink: "/games",
    },
};
