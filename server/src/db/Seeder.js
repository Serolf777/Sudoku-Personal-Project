import { connection } from "../boot.js"
import PuzzleSeeder from "./seeders/PuzzleSeeder.js"
import BoxesSeeder from "./seeders/BoxesSeeder.js"


class Seeder {
  static async seed() {

    console.log("Seeding puzzles... okay...")
    await PuzzleSeeder.seed()

    console.log("Seeding all boxes... Whew!")
    await BoxesSeeder.seed()


    
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder