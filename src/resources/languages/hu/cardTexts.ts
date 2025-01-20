import { cardData } from "../../../models/cardData";
import { cardType } from "../../../models/cardType";

export const cardTexts: Record<cardType, cardData> = {
    chat: {
        title: "Csevegőfelület",
        description: "Hogy mindig elérd a barátaidat!",
        buttonText: "Csevegés",
        buttonLink: "/chat",
        notification: "1 olvasatlan!",
    },
    forum: {
        title: "Fórum",
        description: "A lényeges dolgok kivesézésére",
        buttonText: "Belépés",
        buttonLink: "/forum",
    },
    games: {
        title: "Játék",
        description: "A közös időtöltésre",
        buttonText: "Gyerünk!",
        buttonLink: "/games",
    },
};
