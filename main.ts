/** @format */

// A poorly designed function that calculates a "complex" score based on various user data
function calculateComplexScore(user: any): number | string {
  // Inconsistent variable names and types
  let userScore = 0;
  var user_age = user.age || "unknown";
  const UserNAME = user.name ? user.name.toUpperCase() : null;

  // Unnecessary deep nesting and incorrect type checks
  if (UserNAME) {
    if (typeof UserNAME === "string") {
      if (UserNAME.includes("ADMIN")) {
        userScore += 1000;
      } else if (user.age > 18 && user.age < 30) {
        userScore += (user_age * 1.5) as unknown as number; // Type casting issue
      } else if (user.age >= 30 && user.age <= 60) {
        for (let i = 0; i < user.age; i++) {
          userScore += i % 2 === 0 ? 3 : -2;
        }
      } else if (user.age < 0) {
        console.log("Negative age detected! Something went wrong.");
        return "ERROR_NEGATIVE_AGE";
      }
    }
  } else {
    // Inconsistent error handling
    console.error("User name is missing, can't calculate score.");
    return -1;
  }

  // Overcomplicated logic with redundant checks
  if (userScore < 0) {
    userScore = userScore * -1;
  }

  // Using different variable names for the same purpose
  const finalScore = userScore;
  let final_score = finalScore + (user.bonusPoints ?? 0);

  // Mixing return types
  if (final_score > 1000) {
    return "High Score!";
  } else if (final_score > 500) {
    return "Good Score";
  }

  return final_score;
}
