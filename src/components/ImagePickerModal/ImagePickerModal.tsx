import { FC, useCallback, useState } from 'react';
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  CameraOptions,
  launchCamera,
} from 'react-native-image-picker';
import Modal from 'react-native-modal/dist/modal';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import Button from '../Button/Button';

import createStyles from './ImagePickerModal.style';
import { useAppDispatch } from '../../store/hooks';
import userThunk from '../../store/user/userThunk';
import CameraIcon from '../../assets/icons/camera.svg';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

type ImageType = {
  base64: string;
  fileName: string;
  fileSize: number;
  height: number;
  width: number;
  type: string;
  uri: string;
};

const ImagePickerModal: FC<IProps> = ({ isVisible, onClose }) => {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();
  const [pickerResponse, setPickerResponse] = useState<{ assets: ImageType[] }>(
    { assets: [] },
  );

  const changePicker = useCallback((value: any) => {
    setPickerResponse(value);
  }, []);

  const onImageLibraryPress = useCallback(() => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };
    launchImageLibrary(options, changePicker);
  }, [changePicker]);

  const onCameraPress = useCallback(() => {
    const options: CameraOptions = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
    };
    launchCamera(options, changePicker);
  }, [changePicker]);

  const onPressSaveImage = () => {
    try {
      if (uri.length) {
        dispatch(userThunk.changeAvatar(uri)).unwrap();
      }
    } catch (error) {
      console.error(error);
    } finally {
      onClose();
    }
  };

  const uri =
    (pickerResponse?.assets &&
      pickerResponse?.assets.length &&
      pickerResponse.assets[0].uri) ||
    '';

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.container}>
      <SafeAreaView style={styles.contentArea}>
        <View style={[styles.modalSection, styles.avatarArea]}>
          {uri ? (
            <Image source={{ uri }} style={styles.avatarArea} />
          ) : (
            <CameraIcon width={50} height={50} style={styles.icon} />
          )}
        </View>
        <View style={styles.buttonsArea}>
          <View style={styles.modalSection}>
            <Button title="Library" onPress={onImageLibraryPress} />
          </View>
          <View style={styles.modalSection}>
            <Button title="Camera" onPress={onCameraPress} />
          </View>
        </View>
        <View style={styles.modalSection}>
          <Button title="Save Image" onPress={onPressSaveImage} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ImagePickerModal;
