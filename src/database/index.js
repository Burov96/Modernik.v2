import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://burov96:123456782023@cluster0.p1f5hzv.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Успешна връзка с база данни!"))
    .catch((err) =>
      console.log(`Получихте следното съобщение от база данни : ${err.message}`)
    );
};

export default connectToDB;
