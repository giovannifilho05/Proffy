import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favored: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favored }) => {
  const [isfavored, setfavored] = useState(favored);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`https://wa.me/${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isfavored) {
      const favoritesIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id ===teacher.id;
      });

      favoritesArray.splice(favoritesIndex, 1);
      
      setfavored(false);
    } else {
      favoritesArray.push(teacher);

      setfavored(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container} >
      <View style={styles.profile} >
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo} >
          <Text style={styles.name} >{teacher.name}</Text>
          <Text style={styles.subject} >{teacher.subject}</Text>
        </View>

      </View>

      <Text style={styles.bio} >
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}

          <Text style={styles.priceValue}>R$ {teacher.cost},00</Text>
        </Text>

        <View style={styles.buttonsContainer} >
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton,
              isfavored
                ? styles.favored
                : {}
            ]}
          >
            {isfavored
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutLineIcon} />
            }

          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText} >Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );

}

export default TeacherItem;