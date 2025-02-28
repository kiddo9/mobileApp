import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCard from "../../components/ImageCard";
import Texts from "../../components/Text";
import Button from "../../components/Button";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import CustomBackButton from "../../components/customBackButton";
import { Link, router, useLocalSearchParams } from "expo-router";
import useUser from "../../hooks/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usePlace from "../../hooks/usePlace";

function Notification() {
  const { id } = useLocalSearchParams();
  const { place, p, price } = usePlace(id);

  const facilities = [
    "Transport",
    "simaksi",
    "coffee Break",
    "Meals during trekking",
    "comping tents",
    "p3k",
    "officially recognized mountain guide",
    "Guide during trekking",
  ];
  let [showCount, setShowCount] = useState(1);
  let [Price, setPrice] = useState<number>();
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([]);
  const [wishlistOption, setWishListOption] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { user } = useUser();

  const wishlist = async () => {
    const collections = await AsyncStorage.getItem("wishlistCollections");
    setList(JSON.parse(collections));
  };

  useEffect(() => {
    wishlist();
    alreadyInWishlist();
    setPrice(price);
  }, [price, isInWishlist]);

  const rundown = [
    {
      title: "1. Ranupane (Basecamp) - Pos 1 (Landengan Dowo)",
      para: "Located at an altitude of 2,100 meters above sea level, Ranu Pani is the licensing and checking post for all visitors. Group hikers are simply represented by a team or group leader by submitting a photocopy of their identity card, a list of hikers' names, a health certificate, and a list of luggage.",
    },
    {
      title: "2. Pos 1 (Landengan Dowo) - Pos 2 (Watu Rejeng)",
      para: "The distance between post 1 and post 2 is the closest, with a fairly gentle route. At the beginning, the path is slightly uphill with dirt path conditions. However, the road conditions are still sloping. Right and left are bushes and trees. Then climbers will arrive at post 2.",
    },
    {
      title: "3. Pos 2 (Watu Rejeng) - Pos 3",
      para: "This is the longest of all the Ranu Pane to Ranu Kumbolo routes. The initial route is a dirt road with large rocks, uphill for a short distance, and then sloping again. Climbers will encounter several medium-sized trees that grow sideways and across the climbing path, thus slightly blocking the road. Hikers must duck and walk under the transverse tree trunks or step over them in order to pass. After that, the road slopes back down without any tree obstacles. Then hikers will reach a wooden bridge in the middle of the forest. It is recommended that hikers do not stand still for long on the bridge to minimize possible risks. After passing the bridge, the road slopes again and then uphill again until post 3.Your email here...",
    },
    {
      title: "4. Pos 3 - Pos 4",
      para: "The path goes uphill with a staircase-like dirt road, with handrails made of tree branches on either side. After the short uphill walk, the path slopes down again. Right and left are bushes and large trees. After going further, on the left is a ravine and on the right is a cliff wall, right and left full of shrubs and small to medium-sized trees. As we get closer to post 4, the green Ranu Kumbolo lake comes into view. This beautiful view feels refreshing. Then, climbers arrive at post 4",
    },
    {
      title: "5. Pos 4 - Ranu Kumbolo",
      para: "The path is a sloping dirt road with weeds on either side. The route then descends and continues in the form of a sloping road on the edge of the lake. The sloping road is like a vast meadow overgrown with weeds, until climbers arrive at the Ranu Kumbolo camping area. Usually hikers camp here as well as rest before continuing their journey to Kalimati, which is the next point that is usually used as a camping spot.Ranu Kumbolo - Oro Oro Ombo",
    },
    {
      title: "6. Oro Oro Ombo - Cemoro Kandang",
      para: "The route begins by climbing a steep incline called Tanjakan Cinta, located behind Ranu Kumbolo lake. There is a myth that says that if you pass through Tanjakan Cinta by not looking back, then you will definitely last with your partner. Again, this is a myth without any scientific evidence. For the condition of the ramp of love in the form of a path in the middle of the grass that grows throughout the place. After that climbers arrive at Oro-Oro Ombo.",
    },
    {
      title: "7. Cemoro Kandang - Jambangan",
      para: "Oro-Oro Ombo is a vast savanna or grassland overgrown with grass and trees. There is also a beautiful purple-colored plant called Verbena Brasiliensis Vell that originated from Brazil, South America. This plant is parasitic and thrives in April-May, then withers by November. This plant will flower in the first year, then in the second year wither and produce 90,000-100,000 seeds at the end of the stalk. Hikers are advised not to pick them so as not to cause the plant to spread. If you really want to take it, the correct way is to pull it out when it is still flowering and has not dried up, then put it in plastic and store it in a bag. If hikers cannot follow these steps, they are advised not to pick this plant, just pass by while enjoying its beauty by taking pictures. After Oro-Oro Ombo, hikers arrive at Cemoro Kandang.",
    },
    {
      title: "8. Jambangan - Kalimati",
      para: "The trail is a path with grass, bushes and trees on either side. The road continues to climb, although not extreme and steep, but it requires physical condition that remains excellent. Many hikers usually rest on this path. Unwind while taking pictures. After that, hikers will reach Jambangan.",
    },
    {
      title: "9. Kalimati - Kelik",
      para: "From Jambangan you can see the summit of Semeru a little bit. This is where climbers usually get excited again because they can see the peak getting closer.",
    },
    {
      title: "10. Kelik - Mahameru Peak",
      para: "Usually climbers camp in Kalimati, which is a large meadow overgrown with grass, weeds, and trees. Climbing to the summit is recommended starting at 24.00. Because, at around 10:00, the wind in the peak area usually turns and leads to climbers. This wind carries poisonous gas. So, if you climb at 24.00, with a climbing time of 6-7 hours, climbers will have about 2-3 hours at the top of Mahameru. Meanwhile, from Kalimati to Kelik the road is uphill, and Kelik is the limit of vegetation, which is the limit of growing trees. At the beginning of the climb, the path is a dirt path. However, as you get closer to Kelik, the path becomes a rocky sandy road, after which climbers arrive at Kelik. The important thing to remember is that insurance covers climbers only up to Kalimati. If you want to get to the top, then the risk is borne by the climber himself, including the risk of life safety.",
    },
  ];

  function addNumber() {
    setShowCount((prevCount) => {
      const newCount = prevCount + 1;
      setPrice(newCount * p); // Update price based on the new count
      return newCount;
    });
  }

  function subtractNumber() {
    if (showCount > 1) {
      setShowCount((prevCount) => {
        const newCount = prevCount - 1;
        setPrice(newCount * p); // Update price based on the new count
        return newCount;
      });
    }
  }

  async function proccedTransaction() {
    await AsyncStorage.setItem(
      "bookingData",
      JSON.stringify({
        userId: user.id,
        placeId: place.id,
        price: Price,
        persons: showCount,
      })
    );
  }

  function timeout() {
    let intervalId: NodeJS.Timeout;

    useEffect(() => {
      intervalId = setInterval(() => {
        setSuccess(true);
      }, 3000);

      return () => clearInterval(intervalId); // Cleanup: Clears interval when component unmounts
    }, []); // Empty dependency array ensures it runs only once
  }

  function alreadyInWishlist() {
    list.forEach((li) => {
      li.items.forEach((l: any) => {
        const item = typeof l == "string" ? JSON.parse(l) : "";

        if (id == item.id) {
          setIsInWishlist(true);
        }
      });
    });
  }

  return (
    <SafeAreaView className="h-full px-3 py-2">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className={`${Platform.OS == "android" ? "pt-3" : "pt-3"}`}
      >
        <View>
          <CustomBackButton
            ClassName={`bg-white top-12 absolute z-[100] ml-3 w-10 h-10 flex flex-row justify-center items-center rounded-full px-3`}
            Size={24}
            text={false}
            Color="black"
          />
          <Pressable
            className={`absolute z-[100] w-10 h-10 rounded-full flex flex-row justify-center items-center px-1 top-12 right-2 ${
              isInWishlist == true ? "bg-blue-500" : "bg-white"
            }`}
            onPress={() => {
              setWishListOption(true);
              if (isInWishlist == true) {
                setWishListOption(false);
                Alert.alert("already in a wishlist");
                return;
              }
            }}
          >
            <Fontisto
              name="heart-alt"
              size={20}
              color="black"
              className="mx-auto"
            />
          </Pressable>
          <Modal
            animationType="slide"
            transparent={true}
            visible={wishlistOption}
          >
            <View className="w-full z-[10000000000] h-full bg-[#000000a0]">
              <View
                className={`bg-white absolute rounded-xl z-[100] right-0 bottom-0 top-[35rem] left-0`}
              >
                <TouchableOpacity
                  className="w-44 h-1 bg-gray-300 mx-auto mt-3 rounded-full py-1"
                  onPress={() => {
                    setWishListOption(false);
                  }}
                ></TouchableOpacity>
                {list.length == 0 && (
                  <View className="flex flex-col items-center justify-center h-full gap-3">
                    <Text className="text-center flex flex-row font-bold text-xl justify-center">
                      No wishlist created
                    </Text>
                    <Link
                      href={"/(tabs)/screens/Chats"}
                      onPress={() => {
                        setWishListOption(false);
                      }}
                    >
                      <Text className="text-center flex flex-row font-medium text-xl justify-center">
                        create wishlist?
                      </Text>
                    </Link>
                  </View>
                )}
                <ScrollView
                  contentContainerStyle={{
                    paddingBottom: 200,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                  }}
                  className="rounded-xl flex flex-col gap-3 h-full fixed"
                >
                  {list.map((li, index) => (
                    <TouchableOpacity
                      key={index}
                      className="bg-black w-full py-4 px-4 rounded-xl my-3"
                      onPress={async () => {
                        const updatedList = list.map((li, i) =>
                          i == index
                            ? {
                                ...li,
                                items: [...li.items, JSON.stringify(place)],
                              }
                            : li
                        );

                        setList(updatedList);
                        setWishListOption(false);
                        await AsyncStorage.setItem(
                          "wishlistCollections",
                          JSON.stringify(updatedList)
                        );
                        router.push("/(tabs)/screens/Chats");
                        timeout();
                      }}
                    >
                      <Text className="text-white text-md font-semibold">
                        {li.name} wishlist
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
          <ImageCard
            image={{ uri: place.image }}
            Style=" w-full h-[30rem] rounded-3xl"
          />
          <View className="flex-row items-center justify-between px-5 -mt-[83px]">
            <View>
              <Texts text={place.name} Style="text-3xl text-white" />
              <Texts text={place.location} Style="text-white" />
            </View>
            <ImageCard
              image={{ uri: place.image }}
              Style="w-28 h-20 rounded-xl shadow-lg"
            />
          </View>
        </View>

        <View className="flex-row justify-around mt-6">
          <View className="pr-5 border-r border-gray-500">
            <Texts text="Ratings" Style="text-center mb-2" />
            <View className="flex-row items-center">
              <Texts text={place.rating} Style="font-bold" />
            </View>
          </View>

          <View className="pr-5 border-r border-gray-500">
            <Texts text="Type" Style="text-center" />
            <View>
              <Texts text={place.type} Style="font-bold" />
            </View>
          </View>

          <View className="pr-5 border-r border-gray-500">
            <Texts text="Estimated" Style="" />
            <View>
              <Texts text={place.estimated} Style="font-bold" />
            </View>
          </View>

          <View className="">
            <Texts text="VIA" Style="" />
            <View>
              <Texts text={place.via} Style="font-bold" />
            </View>
          </View>
        </View>
        <Texts text="Description" Style="text-xl font-bold mt-6" />
        <Texts text={place.description} Style="" />

        <Texts text="choose date" Style="text-xl font-bold mt-6" />
        <View
          className={`flex-row mt-3 justify-between ${
            Platform.OS == "android" && "text-[20rem]"
          }`}
        >
          <Text className="border text-sm border-gray-400 py-3 px-2 rounded-xl bg-black text-white">
            15 Dec - 18 Dec 2024
          </Text>
          <Text className="border text-sm border-gray-400 py-3 px-2 rounded-xl">
            15 Dec - 18 Dec 2024
          </Text>
          <Text className="border text-sm border-gray-400 py-3 px-2 rounded-xl">
            choose date
          </Text>
        </View>

        <View className="flex-row items-center justify-between py-7 px-3 border border-gray-500 mt-7 rounded-3xl">
          <View className="flex-col -mt-5">
            <Texts text="Number of person" Style="text-xl font-semibold mt-6" />
            <Text>${price}/person</Text>
          </View>
          <View className="flex-row-reverse items-center justify-between w-28">
            <Button
              title="+"
              handles={addNumber}
              extrastyling="border-2 border-gray-500 rounded-full w-8 h-8 flex justify-center items-center"
              textstyling="text-center"
              disable={null}
            />
            <Text id="showCount" className="text-2xl">
              {showCount}
            </Text>
            <Button
              title="-"
              handles={subtractNumber}
              extrastyling="border-2 border-gray-500 rounded-full w-6 h-6 w-8 h-8 flex justify-center items-center"
              textstyling="text-center"
            />
          </View>
        </View>

        <View className="mt-8">
          <Text className="text-xl font-bold mb-5">Facilities</Text>
          <View className="flex flex-row flex-wrap gap-3">
            {facilities.map((list, index) => (
              <TouchableOpacity
                key={index}
                className={`${
                  Platform.OS == "ios" && "border-2 border-black rounded-xl"
                } py-2 px-3 rounded-xl hover:bg-red-400 cursor-pointer`}
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  ...Platform.select({ ios: { borderRadius: 10 } }),
                }}
              >
                <Text>{list}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View></View>
      </ScrollView>

      <TouchableOpacity
        className={`${
          Platform.OS == "android" ? "-right-80" : "-right-96"
        } fixed w-20 bottom-24`}
        onPress={() => alert("feature is not yet ready")}
      >
        <ImageCard image={require("../../assets/images/Button.png")} Style="" />
      </TouchableOpacity>

      <View
        className={`absolute bottom-0 left-0 right-0 flex-row items-center justify-around h-20 bg-black ${
          Platform.OS == "ios" && "h-28 pb-5"
        }`}
      >
        <Texts text={`$${Price}/person`} Style="text-white text-3xl" />
        <Button
          title="Book Now"
          handles={() => setVisible(true)}
          extrastyling="bg-[#1A8EEA] px-2 rounded-full py-4 w-36"
          textstyling="text-white font-bold text-center"
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View
          className={`top-44 rounded-t-[4rem] absolute bottom-0 right-0 left-0 bg-white`}
        >
          <Button
            title=""
            extrastyling="h-1 bg-gray-500 w-28 mx-auto mt-3 rounded-full py-1"
            handles={() => setVisible(false)}
          />
          <ScrollView
            contentContainerStyle={{ paddingBottom: 200 }}
            className="px-5 mt-6 py-5"
          >
            <Text className="text-3xl font-bold">Date</Text>
            <Text className="text-lg py-1">
              Departure date must confirm the relevant admin if there is a
              schedule cancellation
            </Text>
            <Text className="text-3xl font-bold">Rundown</Text>

            {rundown.map((info, index) => (
              <View key={index}>
                <Text className="text-lg mt-8">{info.title}</Text>
                <Text className="mt-3 text-left ml-3">{info.para}</Text>
              </View>
            ))}

            <Text className="text-3xl font-bold mt-10">Meeting point</Text>
            <Text className=" py-1">
              For the meeting point, try to coordinate with the admin so that
              there is no miss communication due to the wrong pick-up.
            </Text>

            <Text className="text-3xl font-bold mt-10">Facilities</Text>
            <Text className=" py-1">
              For facilities, we will make a wc tent if participants are up to
              20 people, then if you want to rent climbing equipment, please
              contact the admin before departure. And if you want to hire a
              private guide, there is an additional fee and immediately
              coordinate with the admin before h-3 departure.
            </Text>

            <Text className="mt-9">
              NOTES: Maintain your attitude, speech and behavior while on the
              mountain. Do not damage the mountain and do not commit vandalism.
              After reaching the top, you must descend before 10:00 am. Because
              to avoid gusts of wind that carry toxic gases from the crater.
              When heading to the top in the sandy area, never step on / stand /
              sit / lean on the rock because the rock in the sandy area is very
              easy to landslide. Use mountain shoes complete with gaiters to be
              comfortable when summits attack. Use trackpole if necessary Do not
              use headsets and earphones when summit attack to the top of
              Mahameru. Always prepare enough supplies during the climb Never
              leave the group or leave traveling companions.
            </Text>

            <Button
              title="Proceed"
              handles={() => {
                setVisible(false);
                proccedTransaction();
                router.push("/payment1");
              }}
              extrastyling="w-full bg-black mt-14 py-5 rounded-xl"
              textstyling="text-center text-white text-lg font-bold"
            />
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Notification;
