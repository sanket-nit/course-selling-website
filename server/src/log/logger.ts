import { createLogger } from "winston";
import logLevels from "../constants/logging";

const logger = createLogger({
  levels: logLevels,
});
