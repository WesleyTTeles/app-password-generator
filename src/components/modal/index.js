import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose }) {
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password);

    alert("Senha Copiada com Sucesso!");
    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.textModal}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onPress={handleCopyPassword}>
          <Text style={styles.passwordText}>{password}</Text>
        </Pressable>

        <View style={styles.buttonModal}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonBack}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={handleCopyPassword}
          >
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(24, 24, 24, 0.65)",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
  },
  textModal: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  innerPassword: {
    width: "90%",
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
  },
  passwordText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
  buttonModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 6,
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    borderRadius: 6,
    fontSize: 18,
    padding: 8,
    color: "#FFF",
  },
  buttonSaveText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
