import {
    Alert,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import *as Location from "expo-location";
import * as LocationGeoCoding from "expo-location";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
const index = () => {
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        "Konumunuz alınıyor...");
    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                "Konum Servisleri Etkin Değil",
                "Devam Etmek İçin Lütfen Konum Servislerini Etkinleştirin",
                [{ text: "Tamam" }],
                { cancelable: false }
            );
        } else {
            setLocationServicesEnabled(true);
        }
        const GetCurrentLocation = async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync();

            if (status !== "granted") {
                Alert.alert(
                    "İzin Verilmedi",
                    "Uygulamanın Konum Hizmeti Kullanmasına İzin Ver",
                    [{ text: "OK" }],
                    { cancelable: false }
                );
            }
            const location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });
            console.log(location);
            let { coords } = await Location.getCurrentPositionAsync();
            if (coords) {
                const { latitude, longitude } = coords;

                let response = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude,
                });

                const address = await LocationGeocoding.reverseGeocodeAsync({
                    latitude,
                    longitude,
                });

                const streetAddress = address[0].name;
                for (let item of response) {
                    let address = `${item.name}, ${item?.postalCode}, ${item?.city}`;

                    setDisplayCurrentAddress(address);
                }
            }
        };
        console.log("Adresim", displayCurrentAddress);
        const recommended = [
            {
                id: 0,
                name: "Burger King",
                image:
                    "https://ichef.bbci.co.uk/ace/ws/793/cpsprodpb/fb56/live/aaf90480-4731-11ee-a664-d5e19cdf66cb.jpg",
                time: "35 - 45",
                type: "Hamburger",
            },
            {
                id: 0,
                name: "Lahmancuncu Elazığ",
                image:
                    "https://image.hurimg.com/i/hurriyet/75/750x422/5f71d3117af50732b4b9d1ed.jpg",
                time: "10 - 35",
                type: "Lahmacun",
            },
            {
                id: 0,
                name: "Domino's Pizza ",
                image:
                    "https://image.hurimg.com/i/hurriyet/75/750x422/64d3925a4e3fe0111cbc4425.jpg",
                time: "20 - 25",
                type: "Pizza",
            },

            {
                id: 0,
                name: "İştah Kebap",
                image:
                    "https://iasbh.tmgrup.com.tr/92c180/752/395/0/71/1152/675?u=https://isbh.tmgrup.com.tr/sbh/2020/03/05/en-harika-adana-kebap-tarifi-adana-kebap-nasil-yapilir-1583404717106.jpg",
                time: "20 - 25",
                type: "Kebap",
            },
            {
                id: 0,
                name: "Hatay Mix Döner",
                image:
                    "https://www.adananinsesi.com/images/haberler/1/18427.jpg",
                time: "20 - 25",
                type: "Döner",
            },
        ];
        const items = [
            {
              id: "0",
              name: "Teklifler",
              description: "%50'ye varan indirimler",
              image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
            },
            {
              id: "1",
              name: "Efsaneler",
              description: "Türkiye genelinde ünlü",
              image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
            },
            {
              id: "2",
              name: "Gurme",
              description: "Seçkin seçimler",
              image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
            },
            {
              id: "3",
              name: "Sağlıklı",
              description: "Özenle hazırlanmış yemekler",
              image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
            },
          ];


          const hotels = [
            {
              id: "0",
              featured_image:
                "https://www.mystar106.com/wp-content/uploads/2020/12/GettyImages-1134335290.jpg",
              images: [
                {
                  id: "0",
                  image:
                    "https://iasbh.tmgrup.com.tr/78d2fd/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2021/09/30/hamburger-tarifi-evde-hamburger-nasil-yapilir-1633000765331.jpg",
                  description: "Whopper",
                },
                {
                  id: "0",
                  image:
                    "https://www.diyetkolik.com/site_media/media/foodrecipe_images/peynirli-tavuklu-hamburger.jpg",
                  description: "  Tavukburger",
                },
              ],
              name: "Burger King",
              cuisines: "Fast Food • Burgerler • Kişi başı 200₺-500₺",
              time: "35 - 40 dakika • 1Km",
              average_cost_for_two: 1600,
              aggregate_rating: 4.3,
              adress: "Örneğin Mahallesi, Örnek Caddesi No: 123, Beşiktaş, İstanbul",
              smalladress: "Beşiktaş, İstanbul",
              offer: "Ücretsiz King Chicken için 50₺ ve üzeri siparişlerde",
              no_of_Delivery: 1500,
              latitude: 12.9916,
              longitude: 77.5712,
            },
        
            {
              id: "1",
              featured_image:
                "https://img-s1.onedio.com/id-5f39838e737e8123613975bb/rev-0/w-900/h-450/f-jpg/s-0f7883aa3dcae2b36c4a5ba020f42e9897de2629.jpg",
              name: "İştah Kebap",
              cuisines: "Türk Mutfağı • Kebaplar • Kişi başı 25₺-40₺",
              average_cost_for_two: 1500,
              aggregate_rating: 4.5,
              adress:
                "Örneğin Mahallesi, Örnek Caddesi No: 456, Kadıköy, İstanbul",
              smalladress: "Kadıköy, İstanbul",
              offer: "Ücretsiz ayran eşliğinde 50₺ ve üzeri siparişlerde",
              no_of_Delivery: 2500,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "44 min",
            },
        
            {
              id: "2",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCYsmzl1yfX0MwTN-E_uHC-bk3p181VzjIA&usqp=CAU",
              name: "Keyif Kahve",
              cuisines: "Kafe • Kahveler • Kişi başı 100₺-200₺",
              average_cost_for_two: 200,
              aggregate_rating: 4.3,
              adress:
                "Örneğin Mahallesi, Örnek Sokak No: 789, Şişli, İstanbul",
              smalladress: "Şişli, İstanbul",
              offer: "Ücretsiz kurabiye veya muffin hediye",
              no_of_Delivery: 1800,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "20 min",
            },
        
            {
              id: "3",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wuHjGnvTD4Aewe_M2-_5OSwPiPv1kUvMljF-sqoPRzvoFxD06BK2ac2jV-ZmQG6lQTg&usqp=CAU",
              name: "Kahvaltı Köşesi",
              cuisines: "Kahvaltı • Türk Mutfağı ",
              average_cost_for_two: 1850,
              aggregate_rating: 4.1,
              adress:
                "Örneğin Mahallesi, Örnek Sokak No: 123, Beşiktaş, İstanbul",
              
              smalladress: " Beşiktaş, İstanbul ",
              offer: "₹50 OFF",
              no_of_Delivery: 1700,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "38 min",
            },
        
            {
              id: "4",
              featured_image:
                "https://cdn1.ntv.com.tr/gorsel/vV3Aqmdvf0-g_zh96J6plw.jpg?width=710&height=533&mode=both&scale=both&meta=square",
              name: "Lahmacun Lezzet",
              cuisines: "Lahmacun • Türk Mutfağı • Kişi başı 10₺-20₺",
              average_cost_for_two: 1600,
              aggregate_rating: 4.4,
              adress: "Örneğin Mahallesi, Örnek Sokak No: 456, Kadıköy, İstanbul",
              smalladress: "Kadıköy, İstanbul",
              offer: "Her 3 lahmacun alımında 1 lahmacun hediye",
              no_of_Delivery: 1230,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "51 min",
            },
            {
              id: "5",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAW6AHZuQtR_1d9WPZn5mjK_jG-aAJxYfLQ&usqp=CAU",
              name: "Lezzetin Izgarası",
              cuisines: "Izgara • Türk Mutfağı • Kişi başı 30₺-50₺",
              aggregate_rating: 3.5,
              adress:"Örneğin Mahallesi, Örnek Sokak No: 789, Şişli, İstanbul",
              smalladress:"Şişli, İstanbul",
              offer: "Her 100₺ alışverişe 10₺ indirim",
              no_of_Delivery: 500,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "42 min",
            },
            {
              id: "6",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvPe-0FZVXXBJkBWf--jnjCcKN6PxD1Zgdw&usqp=CAU",
              name: "Hızlı Lezzetler",
              cuisines: "Fast Food • Çeşitli Mutfağa Ait • Kişi başı 20₺-40₺",
              aggregate_rating: 4.2,
              adress: "Örneğin Mahallesi, Örnek Sokak No: 567, Üsküdar, İstanbul",
              smalladress: "Üsküdar, İstanbul",
              offer: "Ücretsiz patates kızartması 2 adet",
              no_of_Delivery: 1100,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "34 min",
            },
            {
              id: "7",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVnb3JlCmtRJUTXo3Tj3dl_ZPjq2ScYFE6g&usqp=CAU",
              name: "4 Seasons",
              cuisines: "Çin • Asya Mutfağı • Kişi başı 25₺-50₺",
              aggregate_rating: 4.5,
              adress:
                "Örneğin Mahallesi, Örnek Sokak No: 321, Beyoğlu, İstanbul",
              smalladress: "Beyoğlu, İstanbul",
              offer: "Her 75₺ alışverişe 15₺ indirim",
              no_of_Delivery: 1500,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "30 min",
            },
            {
              id: "8",
              featured_image:
                "https://i.lezzet.com.tr/images-xxlarge-secondary/hazir-pizza-nasil-pisirilir-9ced5487-44fe-4a00-8acc-311417d016fb.jpg",
              name: "Pizza Palace",
              cuisines: "Pizza, İtalyan Mutfağı",
              aggregate_rating: 4.1,
              adress:
                "Örneğin Mahallesi, Örnek Sokak No: 789, Şişli, İstanbul",
              smalladress: "Şişli, İstanbul",
              offer: "Her pizza alışverişine 1 pizza bedava",
              no_of_Delivery: 1500,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "45 min",
            },
            {
              id: "9",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30R3IntPKgz0A7WzeylvnDyM8EwmAfE2qXA&usqp=CAU",
              name: "Tavuk Dünyası",
              cuisines: "Tavuk, Fast Food",
              aggregate_rating: 3.9,
              adress:
                "1st Floor, Central Mall, G.S. Road, Sree Nagar, Christian Basti, Guwahati",
              smalladress: "Üsküdar, İstanbul",
              offer: "2 menü alana kola bedava",
              no_of_Delivery: 2500,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "33 min",
            },
            {
              id: "10",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdGrJhslCsWFMNhndCotN4HNucd_pm9nQSA&usqp=CAU",
              name: "Fat Belly",
              cuisines: "Asian, Chinese, Tibetan",
              aggregate_rating: 4.5,
              adress:
                "Opposite Rabindra Bhawan, GNB Road, Ambari, Dighalipukhuri East, Uzan Bazaar, Guwahati",
              smalladress: "Dighalipukhuri East, Guwahati",
              offer: "₹60 OFF",
              no_of_Delivery: 900,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "53 min",
            },
            {
              id: "11",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEO2PLGXFMmFjaR1Kj19mndyPl-Wh4Kbq0Hw&usqp=CAU",
              name: "Makhan Fish and Chicken Corner",
              cuisines: "Asian, Chinese",
              aggregate_rating: 4.5,
              adress:
                "21-A, Near Madaan Hospital, Majitha Road, Basant Nagar, Amritsar",
              smalladress: "Basant Nagar, Amritsar",
              offer: "₹55 OFF",
              no_of_Delivery: 1200,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "43 min",
            },
            {
              id: "12",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUsgy4YrizXUafeKLzAWasb93wvT_TSIvgw&usqp=CAU",
              name: "Bharawan Da Dhaba",
              cuisines: "North Indian, Fast Food",
              aggregate_rating: 3.6,
              adress: "Near Amritsar Municipal Corporation, Town Hall, Amritsar",
              smalladress: "Town Hall, Amritsar",
              offer: "₹70 OFF",
              no_of_Delivery: 1600,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "28 min",
            },
            {
              id: "13",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXsKQIgGajlkt7qydP7TS6xpVD_gKY6ufnw&usqp=CAU",
              name: "The Kulcha Land",
              cuisines: "North Indian,Asian",
              aggregate_rating: 4.3,
              adress:
                "Opposite M.K Hotel, District Shopping Centre, Ranjit Avenue, Amritsar",
              smalladress: "Ranjit Avenue, Amritsar",
              offer: "₹80 OFF",
              no_of_Delivery: 2600,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "32 min",
            },
            {
              id: "14",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0iR3PZXGiNSyJf8XCMHuF13y9KL2owcNYQ&usqp=CAU",
              name: "Brothers Dhaba",
              cuisines: "North Indian",
              aggregate_rating: 4.6,
              adress:
                "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
              smalladress: "Amritsar",
              offer: "₹65 OFF",
              no_of_Delivery: 1300,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "42 min",
            },
            {
              id: "15",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbn8yLak8QNu-M5P4ttVPHFkvKwz4G48x7w&usqp=CAU",
              name: "Charming Chicken",
              cuisines: "North Indian",
              aggregate_rating: 4.6,
              adress:
                "Golden Temple Out Road, Opposite Amritsar Municipal Corporation, Town Hall, Amritsar",
              smalladress: "Near Basant Nagar, Amritsar",
              offer: "₹45 OFF",
              no_of_Delivery: 700,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "28 min",
            },
            {
              id: "16",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQSJX9mRckG3R7NfvYCRe-08s-z22tX-6nQ&usqp=CAU",
              name: "Beera Chicken Corner",
              cuisines: "North Indian",
              aggregate_rating: 4.4,
              adress:
                "Opposite Bandari Hospital, Sehaj Avenue, Majitha Road, Near White Avenue, Amritsar",
              smalladress: "Near White Avenue, Amritsar",
              offer: "₹80 OFF",
              no_of_Delivery: 1400,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "34 min",
            },
            {
              id: "17",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOJlhGwhda4tsD8Rgk1A97akTRV8QJJC4DA&usqp=CAU",
              name: "Brothers' Amritsari Dhaba",
              cuisines: "North Indian",
              aggregate_rating: 4.2,
              adress: "Phawara Chowk, Town Hall, Amritsar",
              smalladress: "Town Hall, Amritsar",
              offer: "₹40 OFF",
              no_of_Delivery: 1600,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "40 min",
            },
            {
              id: "18",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGqVUxo6HO-CtXn-AHgAin1tvN4l8_A0e1Q&usqp=CAU",
              name: "La Roma Pizzeria",
              cuisines: "Fast Food, Italian",
              aggregate_rating: 4.6,
              adress: " Ranjit Avenue, Amritsar",
              smalladress: " Ranjit Avenue, Amritsar",
              offer: "₹40 OFF",
              no_of_Delivery: 2200,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "46 min",
            },
            {
              id: "19",
              featured_image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpI5t_Hgch4-I9edPRV4YNeZKgMX1iHtQng&usqp=CAU",
              name: "Crystal Restaurant",
              cuisines: "North Indian, Mughlai",
              aggregate_rating: 3.5,
              adress: " Crystal Chowk, Queens Road, INA Colony, Amritsar",
              smalladress: "INA Colony, Amritsar",
              offer: "₹80 OFF",
              no_of_Delivery: 2500,
              latitude: 12.9716,
              longitude: 77.5946,
              time: "22 min",
            },
          ];
        
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
            <View style={{ fLexDirection: "row", alignItems: "center" }}>
                <Entypo name="location-pin" size={24} color="#E52850" />
                <View style={{ flex: 1 }}>
                    <text style={{ fontSize: 15, fontWeight: "500" }}>Deliver to</text>
                    <text style={{ color: "gray", fontSize: 16, marginTop: 3 }} >
                        {displayCurrentAddress}
                    </text>
                </View>
                <Pressable
                    style={{
                        backgroundColor: "#6CB4EE",
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>S</Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 1, borderColor: "C0C0C0", paddingVertical: 8, paddingHorizontal: 10, borderRadius: 11, marginTop: 10, marginHorizontal: 10 }}>
                <TextInput placeholder="Search for food, hotels" />
                <EvilIcons name="search" size={24} color="E52B50" />
            </View>



            <Carousel />
            <Categories />




            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recommended?.map((item, index) => (
                    <View
                        style={{
                            backgroundColor: "white",
                            flexDirection: "row",
                            margin: 10,
                            borderRadius: 8,
                        }}
                    >
                        <View>
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "cover",
                                    borderTopLeftRadius: 8,
                                    borderBottomLeftRadius: 7,
                                }}
                                source={{ uri: item?.image }}
                            />
                        </View>
                        <View style={{ padding: 10, flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>
                                {item?.name}
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    marginTop: 3,
                                    color: "gray",
                                    fontWeight: "500",
                                }}
                            >
                                {item?.type}
                            </Text>

                            <View
                                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                            >
                                <Ionicons name="time" size={24} color="green" />
                                <Text>{item?.time} mins</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Text
                style={{
                    textAlign: "center",
                    marginTop: 7,
                    letterSpacing: 4,
                    marginBottom: 5,
                    color: "gray",
                }}
            >
                EXPLORE
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items?.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            width: 90,
                            borderColor: "#E0E0E0",
                            borderWidth: 1,
                            paddingVertical: 5,
                            paddingHorizontal: 1,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginVertical: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "white"
                        }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: item?.image }}
                        />

                        <Text style={{ fontSize: 13, fontWeight: "500", marginTop: 6 }}>{item?.name}</Text>

                        <Text style={{ fontSize: 12, color: "gray", marginTop: 3 }}>{item?.description}</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={{ textAlign: "center", marginTop: 7, letterSpacing: 4, marginBottom: 5, color: "gray" }}>ALL RESTAURANTS</Text>

            <View style={{ marginHorizontal: 8 }}>
                {data?.map((item, index) => (
                    <Hotel key={index} item={item} menu={item?.menu} />
                ))}
            </View>
        </ScrollView>
    );
};




export default index

const styles = StyleSheet.create({})