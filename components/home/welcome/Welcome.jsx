import {useState} from 'react'
import { useRouter } from 'expo-router'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from "./welcome.style"

import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-Time", "Part-Time", "Contractor"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            placeholder="What are you looking for?"
            onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>


    </View>
  )
}

export default Welcome