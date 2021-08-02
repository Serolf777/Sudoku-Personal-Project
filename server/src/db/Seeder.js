import { connection } from "../boot.js"
import PuzzleSeeder from "./seeders/PuzzleSeeder.js"
import BoxOneSeeder from "./seeders/BoxOneSeeder.js"
import BoxTwoSeeder from "./seeders/BoxTwoSeeder.js"
import BoxThreeSeeder from "./seeders/BoxThreeSeeder.js"
import BoxFourSeeder from "./seeders/BoxFourSeeder.js"
import BoxFiveSeeder from "./seeders/BoxFiveSeeder.js"
import BoxSixSeeder from "./seeders/BoxSixSeeder.js"
import BoxSevenSeeder from "./seeders/BoxSevenSeeder.js"
import BoxEightSeeder from "./seeders/BoxEightSeeder.js"
import BoxNineSeeder from "./seeders/BoxNineSeeder.js"


class Seeder {
  static async seed() {

    console.log("Seeding puzzles... okay...")
    await PuzzleSeeder.seed()

    console.log("Seeding box one... yep!")
    await BoxOneSeeder.seed()

    console.log("seeding box two.... underway")
    await BoxTwoSeeder.seed()

    console.log("Seeding box three... go!")
    await BoxThreeSeeder.seed()

    console.log("Seeding box four... kay!")
    await BoxFourSeeder.seed()

    console.log("Seeding box five... almost!")
    await BoxFiveSeeder.seed()

    console.log("Seeding box six... almooost!")
    await BoxSixSeeder.seed()

    console.log("Seeding box seven... few more!")
    await BoxSevenSeeder.seed()

    console.log("Seeding box eight... gotta do this one!")
    await BoxEightSeeder.seed()

    console.log("Seeding box nine... uh huh!")
    await BoxNineSeeder.seed()

    
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder