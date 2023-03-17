import { FlatList } from "react-native";
import { ListItem, Icon } from "@rneui/base";

const fornitureArr = [{
    title: "Mesa",
    subtitle: "Mesa de caoba de 6 patas para toda la familia"
},
{
    title: "Sofa cama",
    subtitle: "Ideal para la sala y a la vez para darse un buen descanso"
}, {
    title: "Escritorio para PC",
    subtitle: "Dale un aspecto increible a espacio de trabajo con este hermoso escritorio"
}, {
    title: "Silla para oficina",
    subtitle: "Silla de acabado de pino de 3 patas para oficinas"
}, {
    title: "Mesa",
    subtitle: "Mesa de caoba de 6 patas para toda la familia"
},
{
    title: "Sofa cama",
    subtitle: "Ideal para la sala y a la vez para darse un buen descanso"
}, {
    title: "Escritorio para PC",
    subtitle: "Dale un aspecto increible a espacio de trabajo con este hermoso escritorio"
}, {
    title: "Silla para oficina",
    subtitle: "Silla de acabado de pino de 3 patas para oficinas"
}, {
    title: "Mesa",
    subtitle: "Mesa de caoba de 6 patas para toda la familia"
},
{
    title: "Sofa cama",
    subtitle: "Ideal para la sala y a la vez para darse un buen descanso"
}, {
    title: "Escritorio para PC",
    subtitle: "Dale un aspecto increible a espacio de trabajo con este hermoso escritorio"
}, {
    title: "Silla para oficina",
    subtitle: "Silla de acabado de pino de 3 patas para oficinas"
}]

function ViewForniture() {
    return (
        <FlatList
            data={fornitureArr}
            renderItem={({ item }) => (
                <ListItem>
                    <Icon name="label-important-outline" type="material" />
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            )}
            keyExtractor={(item, idx) => idx}
        />
    )
}

export default ViewForniture