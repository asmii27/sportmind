// Team-specific demo results for different teams
export const TEAM_DEMO_DATA: Record<string, any> = {
  "real-madrid": {
    team: "Real Madrid",
    budget: 250,
    scout: {
      thinking: "Analyzing Real Madrid's squad composition...",
      insights: `**Top Talent Identified**: Vinicius Jr - Exceptional left-wing threat with  rating. Currently undervalued at €120M vs market value €180M.

**Rising Stars**: Jude Bellingham - Midfield prodigy, 21 years old,  potential. Perfect for long-term investment.

**Bargain Finds**: Alejandro Balde - Left-back, 21 years old,  rating, available at €40M (market: €65M).

**Recommendation**: Focus on Bellingham for midfield stability. Balde offers defensive depth at excellent value.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Real Madrid's performance trends...",
      insights: `**Peak Performers**: Haaland averaging 1.2 goals/game, 94% pass accuracy. Consistent upward trajectory.

**Emerging Threats**: Mount showing 23% improvement in key passes over last 6 months. Form is exceptional.

**Decline Alert**: Benzema showing -12% decline in sprint speed. Age factor evident but still elite finisher.

**Momentum**: Real Madrid's attack rated , strongest in Europe. Midfield needs reinforcement.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Real Madrid's tactical formation...",
      insights: `**Recommended Formation**: 4-3-3 with inverted wingers for maximum attacking flexibility.

**Optimal Lineup**: Militao-Alaba-Guehi-Balde | Bellingham-Rodri-Foden | Vinicius-Haaland-Saka

**Tactical Advantages**: 78% possession retention, 6.2 expected goals per game, 2.1 defensive blocks per game.

**Real Madrid Strength**: Exceptional attacking prowess. Weakness: Counter-attack vulnerability.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Real Madrid's player workload...",
      insights: `**High Risk Players**: Benzema (2,847 min - FATIGUE ALERT), Rodri (2,654 min - approaching threshold).

**Recovery Status**: Bellingham (fresh, 100% fitness), Balde (good, 95% fitness), Guehi (excellent, 98% fitness).

**Real Madrid Alert**: Nacho showing 89% workload - needs rotation. Modric at 82% - still performing well.

**Recommendation**: Rotate Benzema immediately. Reduce Rodri's workload by 15%.`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Real Madrid's financial efficiency...",
      insights: `**Best Value Signings for Real Madrid**: Bellingham (€13.8M per rating point - EXCELLENT), Balde (€4.9M per rating point - EXCEPTIONAL).

**Current Squad Efficiency**: Haaland €333K per goal (ELITE), Vinicius €437K per goal (PREMIUM).

**Transfer Value Estimates**: Bellingham €120M → €180M (50% appreciation), Balde €40M → €75M (87% appreciation).

**Budget Allocation**: €250M allows for 2-3 major signings. Recommend Bellingham + Balde + depth player.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Real Madrid analysis...",
      insights: `Strategic Priority: Strengthen midfield and defense while maintaining attacking dominance.

Immediate Actions: Secure long-term midfield anchor (Bellingham profile), add defensive depth at left-back, manage Benzema's minutes carefully given workload index trending high.

Risk Assessment: Squad depth is thin in defensive midfield. Rodri workload is the single biggest injury risk this squad faces — rotation is essential.

Data Note: Fatigue and workload indices above are relative to each player's season average, not absolute thresholds. Salary efficiency computed from seeded baseline data.`,
      confidence: 68,
    },
  },
  barcelona: {
    team: "Barcelona",
    budget: 180,
    scout: {
      thinking: "Analyzing Barcelona's talent gaps...",
      insights: `**Priority Signings**: Florian Wirtz - Attacking midfielder, 21 years old,  rating. Available at €100M.

**Defensive Needs**: Lisandro Martinez - Center-back, 25 years old,  rating. €60M investment.

**Bargain Options**: Serhou Guirassy - Midfielder,  rating, available at €35M (market: €55M).

**Barcelona Challenge**: Limited budget (€180M) requires strategic choices. Recommend Wirtz + Martinez combo for balanced squad.

**Recommendation**: Focus on midfield creativity and defensive solidity.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Barcelona's recent form...",
      insights: `**Bright Spots**: Lewandowski still performing at  rating despite age. Pedri showing 18% improvement in creativity.

**Concerns**: Defense conceding 1.8 goals/game (league average 1.2). Gavi showing fatigue signs after 2,100 minutes.

**Positive Trend**: Youth development excellent. Gavi, Pedri, Ansu Fati all improving month-over-month.

**Barcelona Momentum**: Upward trajectory but needs defensive reinforcement to compete for title.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Barcelona's 4-2-3-1 formation...",
      insights: `**Recommended Formation**: 4-2-3-1 with emphasis on possession and control.

**Optimal Lineup**: Pique-Martinez-Araujo-Alba | Busquets-Gavi | Wirtz-Pedri-Fati | Lewandowski

**Tactical Advantages**: 72% possession retention, 5.8 expected goals per game, improved defensive stability.

**Barcelona Style**: Tiki-taka revival with modern pressing. Wirtz adds attacking unpredictability.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Barcelona's injury risks...",
      insights: `**Fatigue Concerns**: Gavi (2,100 min - needs rest), Pedri (1,950 min - monitor closely), Lewandowski (1,850 min - manageable).

**Recovery Status**: Ansu Fati (fresh, 92% fitness), Ferran Torres (good, 88% fitness).

**Barcelona Advantage**: Younger squad means faster recovery. Rotation options available.

**Recommendation**: Rotate Gavi in next 3 matches. Maintain Lewandowski's current schedule (still performing).`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Barcelona's financial strategy...",
      insights: `**Budget Constraints**: €180M available (lower than competitors). Must prioritize.

**Best Value**: Guirassy (€3.9M per rating point - EXCEPTIONAL), Martinez (€7.1M per rating point - EXCELLENT).

**Salary Efficiency**: Lewandowski €380K/week, 0.9 goals/week = €422K per goal (PREMIUM but justified).

**Recommendation**: Wirtz (€100M) + Martinez (€60M) = €160M. Reserve €20M for depth signings.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Barcelona's strategy...",
      insights: `Strategic Priority: Balance Yamal's long-term development with immediate title contention. The youth core is the asset — don't sacrifice it for short-term signings.

Immediate Actions: Reinforce defensive midfield, rotate Gavi to manage fatigue index (currently elevated), and assess Lewandowski's declining sprint metrics before committing to contract extension.

Risk Assessment: Budget constraints are real. €180M available requires prioritisation — defensive stability first, then attacking reinforcement. Overspending on one marquee signing risks squad depth.

Data Note: Salary efficiency and market values are seeded baseline estimates. Lewandowski's 2023-24 goals verified via FBref (verified player in dataset).`,
      confidence: 65,
    },
  },
  liverpool: {
    team: "Liverpool",
    budget: 200,
    scout: {
      thinking: "Analyzing Liverpool's squad needs...",
      insights: `**Midfield Priority**: Declan Rice - Defensive midfielder, 25 years old,  rating. Available at €110M.

**Attacking Option**: Bukayo Saka - Winger, 22 years old,  rating. €85M investment.

**Defensive Depth**: Kieran Tierney - Left-back, 26 years old,  rating. €50M.

**Liverpool Opportunity**: €200M budget allows for 2 major signings. Recommend Rice + Saka for balanced attack/defense.

**Recommendation**: Strengthen midfield control and attacking width.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Liverpool's current form...",
      insights: `**Midfield Strength**: Fabinho performing at , Henderson at . Solid but aging.

**Attack Quality**: Salah averaging 0.95 goals/game (elite), Diaz showing 21% improvement in dribbling.

**Defense Status**: Van Dijk  (world-class), but fullbacks aging. Trent at 1,950 minutes (monitor).

**Liverpool Momentum**: Consistent performers but need youth injection. Midfield aging - Rice would be perfect fit.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Liverpool's 4-3-3 system...",
      insights: `**Recommended Formation**: 4-3-3 with Rice as defensive anchor.

**Optimal Lineup**: Alexander-Arnold-Van Dijk-Gomez-Tierney | Rice-Fabinho-Szoboszlai | Saka-Nunez-Salah

**Tactical Advantages**: 68% possession retention, 5.9 expected goals per game, strong defensive midfield control.

**Liverpool Strength**: Attacking prowess (Salah + Nunez). Rice adds midfield stability.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Liverpool's workload distribution...",
      insights: `**High Workload**: Trent (1,950 min - needs rotation), Salah (1,920 min - monitor), Fabinho (1,880 min - manageable).

**Recovery Status**: Diaz (fresh, 94% fitness), Nunez (good, 91% fitness), Van Dijk (excellent, 96% fitness).

**Liverpool Advantage**: Strong recovery protocols. Rotation options with Gomez and Phillips available.

**Recommendation**: Rotate Trent in 2-3 matches. Maintain Salah's current schedule (performing at elite level).`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Liverpool's transfer strategy...",
      insights: `**Budget Allocation**: €200M allows for strategic signings.

**Best Value**: Saka (€10.2M per rating point - EXCELLENT), Rice (€12.9M per rating point - VERY GOOD).

**Current Squad**: Salah €420K/week, 0.95 goals/week = €442K per goal (ELITE).

**Recommendation**: Rice (€110M) + Saka (€85M) = €195M. Reserve €5M for emergency signings.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Liverpool's strategy...",
      insights: `Strategic Priority: Rejuvenate midfield while maintaining the Salah-led attacking core. Salah's 2023-24 season (18 goals, 9 assists — verified vs Premier League official data) remains the engine.

Immediate Actions: Invest in midfield control and defensive width. Trent's workload index is elevated — rotation or positional adjustment needed to protect availability for run-in.

Risk Assessment: Over-reliance on Salah for goal contribution (32% of win contribution attributed to him per computed model) is a structural vulnerability. Squad balance is the priority.

Data Note: Salah goals/assists verified. Workload indices are relative to season averages, computed via the formula on the Methodology page.`,
      confidence: 72,
    },
  },
  "manchester-city": {
    team: "Manchester City",
    budget: 300,
    scout: {
      thinking: "Analyzing Manchester City's elite squad...",
      insights: `**Attacking Reinforcement**: Vinícius Júnior - Left-wing, 23 years old,  rating. Available at €150M.

**Midfield Depth**: Bruno Fernandes - Midfielder, 29 years old,  rating. €95M investment.

**Defensive Cover**: Rúben Dias - Center-back, 26 years old,  rating. €70M.

**Manchester City Advantage**: €300M budget (highest) allows for premium signings. Recommend Vinícius + Dias for attacking + defensive balance.

**Recommendation**: Maintain dominance with elite-tier signings.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Manchester City's dominance...",
      insights: `**Attacking Machine**: Haaland 1.3 goals/game (world-class), Foden  rating (elite form).

**Midfield Control**: Rodri  (best midfielder in world), De Bruyne  (still performing at elite level).

**Defense Solidity**: Akanji , Stones . World-class defensive line.

**Manchester City Status**: Already dominant. Vinícius addition would be overkill but ensures continued dominance.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Manchester City's system...",
      insights: `**Recommended Formation**: 4-3-3 with Vinícius on left wing.

**Optimal Lineup**: Walker-Akanji-Stones-Dias | Rodri-De Bruyne-Alvarez | Vinícius-Haaland-Foden

**Tactical Advantages**: 74% possession retention, 7.1 expected goals per game (elite), 1.8 defensive blocks per game.

**Manchester City Dominance**: Already best team in Europe. Vinícius makes them unstoppable.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Manchester City's squad health...",
      insights: `**Excellent Condition**: Most players under 1,800 minutes. Rodri at 2,050 min (monitor).

**Recovery Status**: Haaland (1,750 min - fresh), Foden (1,820 min - good), De Bruyne (1,900 min - manageable).

**Manchester City Advantage**: Best rotation options in Europe. Multiple world-class players for each position.

**Recommendation**: Maintain current rotation schedule. No immediate concerns. Vinícius provides additional depth.`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Manchester City's financial power...",
      insights: `**Budget Advantage**: €300M (highest in Europe) allows for premium signings.

**Best Value at Elite Level**: Vinícius (€16.9M per rating point - PREMIUM but justified), Dias (€8.2M per rating point - EXCELLENT).

**Current Squad Efficiency**: Haaland €400K/week, 1.3 goals/week = €308K per goal (ELITE).

**Recommendation**: Vinícius (€150M) + Dias (€70M) = €220M. Reserve €80M for strategic depth.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Manchester City's strategy...",
      insights: `Strategic Priority: Manage squad load intelligently — City's biggest risk is fatigue accumulation across a multi-competition season, not squad quality.

Immediate Actions: Prioritise Rodri rotation (workload index highest in squad). Haaland's 27-goal 2023-24 season (Golden Boot — verified) makes him the asset to protect above all others.

Risk Assessment: Haaland minutes-per-game dependency is City's primary structural concern. De Bruyne injury history compounding this risk makes depth in creative midfield a high-priority investment.

Data Note: Haaland goals/appearances verified vs Premier League official stats. All other metrics computed from seeded baseline data — see Methodology page.`,
      confidence: 75,
    },
  },
  arsenal: {
    team: "Arsenal",
    budget: 160,
    scout: {
      thinking: "Analyzing Arsenal's young squad potential...",
      insights: `**Midfield Reinforcement**: Mateo Kovacic - Midfielder, 28 years old,  rating. Available at €75M.

**Defensive Priority**: Moisés Caicedo - Midfielder/Defender, 21 years old,  rating. €70M investment.

**Attacking Depth**: Jadon Sancho - Winger, 24 years old,  rating. €50M.

**Arsenal Challenge**: Limited budget (€160M) but strong youth core. Recommend Kovacic + Caicedo for midfield balance.

**Recommendation**: Focus on midfield control and youth development.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Arsenal's rising form...",
      insights: `**Young Talent**: Saka  (improving), Martinelli  (emerging star), Odegaard  (creative force).

**Attacking Threat**: Havertz averaging 0.8 goals/game, Nketiah 0.7 goals/game. Solid but needs reinforcement.

**Defense Quality**: White , Saliba . Young, improving defensive line.

**Arsenal Momentum**: Strong upward trajectory. Young squad with high potential. Kovacic would provide experience.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Arsenal's 4-3-3 system...",
      insights: `**Recommended Formation**: 4-3-3 with Kovacic as midfield anchor.

**Optimal Lineup**: Saka-Saliba-White-Tierney | Caicedo-Kovacic-Odegaard | Martinelli-Havertz-Nketiah

**Tactical Advantages**: 66% possession retention, 5.6 expected goals per game, improved midfield control.

**Arsenal Style**: Young, energetic, pressing-based. Kovacic adds experience and ball retention.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Arsenal's squad freshness...",
      insights: `**Good Condition Overall**: Young squad means lower injury risk. Odegaard at 1,850 min (monitor).

**Recovery Status**: Saka (1,780 min - fresh), Martinelli (1,650 min - excellent), Saliba (1,700 min - excellent).

**Arsenal Advantage**: Youngest squad in top 6. Excellent recovery potential.

**Recommendation**: Maintain current rotation. No immediate concerns. Kovacic provides veteran depth.`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Arsenal's financial strategy...",
      insights: `**Budget Constraints**: €160M (limited but manageable).

**Best Value**: Caicedo (€8.4M per rating point - EXCELLENT), Kovacic (€8.9M per rating point - EXCELLENT).

**Squad Efficiency**: Saka €280K/week, 0.85 goals/week = €329K per goal (VERY GOOD).

**Recommendation**: Kovacic (€75M) + Caicedo (€70M) = €145M. Reserve €15M for youth development.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Arsenal's strategy...",
      insights: `Strategic Priority: This squad's ceiling is a title — the youth core (Saka, Ødegaard, Rice, Saliba) is elite. The gap is squad depth and experience in high-pressure moments.

Immediate Actions: Reinforce defensive midfield depth to cover Rice. Saka's workload index is elevated — he is Arsenal's most important player (30% win contribution, 16 goals/9 assists in 2023-24, verified) and must be protected.

Risk Assessment: Youth consistency is the key variable. This squad has never won the title — managing pressure and rotation across 38+ games is the coaching challenge, not squad quality.

Data Note: Saka and goals/assists verified vs StatMuse and Arsenal official site. Workload and fatigue indices are relative to each player's season average.`,
      confidence: 70,
    },
  },
};

export const TEAMS = [
  { id: "real-madrid", name: "Real Madrid", badge: "👑" },
  { id: "barcelona", name: "Barcelona", badge: "🔵" },
  { id: "liverpool", name: "Liverpool", badge: "🔴" },
  { id: "manchester-city", name: "Manchester City", badge: "🩵" },
  { id: "arsenal", name: "Arsenal", badge: "🔴" },
];
