
import {ReactNode,ComponentProps} from 'react';
import {StyleProp, TextStyle,TextInputProps} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export interface ExtraInputProps {
        label: ReactNode;
         icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
}

type InputProps = TextInputProps &  ExtraInputProps