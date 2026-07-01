// Team-specific demo results for different teams
export const TEAM_DEMO_DATA: Record<string, any> = {
  "real-madrid": {
    team: "Real Madrid",
    budget: 250,
    scout: {
      thinking: "Analyzing Real Madrid's squad composition...",
      insights: `TOP TALENT IDENTIFIED: Vinicius Jr - Exceptional left-wing threat with [see computed z-score] rating. Currently undervalued at €120M vs market value €180M.

RISING STARS: Jude Bellingham - Midfield prodigy, 21 years old, [see computed z-score] potential. Perfect for long-term investment.

BARGAIN FINDS: Alejandro Balde - Left-back, 21 years old, [see computed z-score] rating, available at €40M (market: €65M).

RECOMMENDATION: Focus on Bellingham for midfield stability. Balde offers defensive depth at excellent value.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Real Madrid's performance trends...",
      insights: `PEAK PERFORMERS: Haaland averaging 1.2 goals/game, 94% pass accuracy. Consistent upward trajectory.

EMERGING THREATS: Mount showing 23% improvement in key passes over last 6 months. Form is exceptional.

DECLINE ALERT: Benzema showing -12% decline in sprint speed. Age factor evident but still elite finisher.

MOMENTUM: Real Madrid's attack rated [see computed z-score], strongest in Europe. Midfield needs reinforcement.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Real Madrid's tactical formation...",
      insights: `RECOMMENDED FORMATION: 4-3-3 with inverted wingers for maximum attacking flexibility.

OPTIMAL LINEUP: Militao-Alaba-Guehi-Balde | Bellingham-Rodri-Foden | Vinicius-Haaland-Saka

TACTICAL ADVANTAGES: 78% possession retention, 6.2 expected goals per game, 2.1 defensive blocks per game.

REAL MADRID STRENGTH: Exceptional attacking prowess. Weakness: Counter-attack vulnerability.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Real Madrid's player workload...",
      insights: `HIGH RISK PLAYERS: Benzema (2,847 min - FATIGUE ALERT), Rodri (2,654 min - approaching threshold).

RECOVERY STATUS: Bellingham (fresh, 100% fitness), Balde (good, 95% fitness), Guehi (excellent, 98% fitness).

REAL MADRID ALERT: Nacho showing 89% workload - needs rotation. Modric at 82% - still performing well.

RECOMMENDATION: Rotate Benzema immediately. Reduce Rodri's workload by 15%.`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Real Madrid's financial efficiency...",
      insights: `BEST VALUE SIGNINGS FOR REAL MADRID: Bellingham (€13.8M per rating point - EXCELLENT), Balde (€4.9M per rating point - EXCEPTIONAL).

CURRENT SQUAD EFFICIENCY: Haaland €333K per goal (ELITE), Vinicius €437K per goal (PREMIUM).

TRANSFER VALUE ESTIMATES: Bellingham €120M → €180M (50% appreciation), Balde €40M → €75M (87% appreciation).

BUDGET ALLOCATION: €250M allows for 2-3 major signings. Recommend Bellingham + Balde + depth player.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Real Madrid analysis...",
      insights: `STRATEGIC PRIORITY: Strengthen midfield and defense while maintaining attacking dominance.

IMMEDIATE ACTIONS: Secure Bellingham (€120M), Sign Balde (€40M), Rotate Benzema (manage fatigue).

DATA NOTE: Financial projections removed — salary efficiency and transfer values are computed from seeded baseline data; speculative ROI and trophy-impact figures are not derivable from our formulas.

REAL MADRID POSITION: Currently strongest attack. Midfield upgrade will make them unstoppable.

RISK LEVEL: Derived from performance variance in computed metrics (LOW = consistent z-scores, HIGH = volatile recent form)`,
      confidence: 72,
    },
  },
  barcelona: {
    team: "Barcelona",
    budget: 180,
    scout: {
      thinking: "Analyzing Barcelona's talent gaps...",
      insights: `PRIORITY SIGNINGS: Florian Wirtz - Attacking midfielder, 21 years old, [see computed z-score] rating. Available at €100M.

DEFENSIVE NEEDS: Lisandro Martinez - Center-back, 25 years old, [see computed z-score] rating. €60M investment.

BARGAIN OPTIONS: Serhou Guirassy - Midfielder, [see computed z-score] rating, available at €35M (market: €55M).

BARCELONA CHALLENGE: Limited budget (€180M) requires strategic choices. Recommend Wirtz + Martinez combo for balanced squad.

RECOMMENDATION: Focus on midfield creativity and defensive solidity.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Barcelona's recent form...",
      insights: `BRIGHT SPOTS: Lewandowski still performing at [see computed z-score] rating despite age. Pedri showing 18% improvement in creativity.

CONCERNS: Defense conceding 1.8 goals/game (league average 1.2). Gavi showing fatigue signs after 2,100 minutes.

POSITIVE TREND: Youth development excellent. Gavi, Pedri, Ansu Fati all improving month-over-month.

BARCELONA MOMENTUM: Upward trajectory but needs defensive reinforcement to compete for title.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Barcelona's 4-2-3-1 formation...",
      insights: `RECOMMENDED FORMATION: 4-2-3-1 with emphasis on possession and control.

OPTIMAL LINEUP: Pique-Martinez-Araujo-Alba | Busquets-Gavi | Wirtz-Pedri-Fati | Lewandowski

TACTICAL ADVANTAGES: 72% possession retention, 5.8 expected goals per game, improved defensive stability.

BARCELONA STYLE: Tiki-taka revival with modern pressing. Wirtz adds attacking unpredictability.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Barcelona's injury risks...",
      insights: `FATIGUE CONCERNS: Gavi (2,100 min - needs rest), Pedri (1,950 min - monitor closely), Lewandowski (1,850 min - manageable).

RECOVERY STATUS: Ansu Fati (fresh, 92% fitness), Ferran Torres (good, 88% fitness).

BARCELONA ADVANTAGE: Younger squad means faster recovery. Rotation options available.

RECOMMENDATION: Rotate Gavi in next 3 matches. Maintain Lewandowski's current schedule (still performing).`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Barcelona's financial strategy...",
      insights: `BUDGET CONSTRAINTS: €180M available (lower than competitors). Must prioritize.

BEST VALUE: Guirassy (€3.9M per rating point - EXCEPTIONAL), Martinez (€7.1M per rating point - EXCELLENT).

SALARY EFFICIENCY: Lewandowski €380K/week, 0.9 goals/week = €422K per goal (PREMIUM but justified).

RECOMMENDATION: Wirtz (€100M) + Martinez (€60M) = €160M. Reserve €20M for depth signings.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Barcelona's strategy...",
      insights: `STRATEGIC PRIORITY: Balance youth development with immediate title contention.

IMMEDIATE ACTIONS: Sign Wirtz (€100M - attacking creativity), Sign Martinez (€60M - defensive solidity), Rotate Gavi (manage fatigue).

DATA NOTE: Financial projections removed — salary efficiency and transfer values are computed from seeded baseline data; speculative ROI and trophy-impact figures are not derivable from our formulas.

BARCELONA POSITION: Strong youth core + Lewandowski experience. Wirtz + Martinez = title contenders.

RISK LEVEL: Derived from performance variance in computed metrics (LOW = consistent z-scores, HIGH = volatile recent form)`,
      confidence: 72,
    },
  },
  liverpool: {
    team: "Liverpool",
    budget: 200,
    scout: {
      thinking: "Analyzing Liverpool's squad needs...",
      insights: `MIDFIELD PRIORITY: Declan Rice - Defensive midfielder, 25 years old, [see computed z-score] rating. Available at €110M.

ATTACKING OPTION: Bukayo Saka - Winger, 22 years old, [see computed z-score] rating. €85M investment.

DEFENSIVE DEPTH: Kieran Tierney - Left-back, 26 years old, [see computed z-score] rating. €50M.

LIVERPOOL OPPORTUNITY: €200M budget allows for 2 major signings. Recommend Rice + Saka for balanced attack/defense.

RECOMMENDATION: Strengthen midfield control and attacking width.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Liverpool's current form...",
      insights: `MIDFIELD STRENGTH: Fabinho performing at [see computed z-score], Henderson at [see computed z-score]. Solid but aging.

ATTACK QUALITY: Salah averaging 0.95 goals/game (elite), Diaz showing 21% improvement in dribbling.

DEFENSE STATUS: Van Dijk [see computed z-score] (world-class), but fullbacks aging. Trent at 1,950 minutes (monitor).

LIVERPOOL MOMENTUM: Consistent performers but need youth injection. Midfield aging - Rice would be perfect fit.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Liverpool's 4-3-3 system...",
      insights: `RECOMMENDED FORMATION: 4-3-3 with Rice as defensive anchor.

OPTIMAL LINEUP: Alexander-Arnold-Van Dijk-Gomez-Tierney | Rice-Fabinho-Szoboszlai | Saka-Nunez-Salah

TACTICAL ADVANTAGES: 68% possession retention, 5.9 expected goals per game, strong defensive midfield control.

LIVERPOOL STRENGTH: Attacking prowess (Salah + Nunez). Rice adds midfield stability.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Liverpool's workload distribution...",
      insights: `HIGH WORKLOAD: Trent (1,950 min - needs rotation), Salah (1,920 min - monitor), Fabinho (1,880 min - manageable).

RECOVERY STATUS: Diaz (fresh, 94% fitness), Nunez (good, 91% fitness), Van Dijk (excellent, 96% fitness).

LIVERPOOL ADVANTAGE: Strong recovery protocols. Rotation options with Gomez and Phillips available.

RECOMMENDATION: Rotate Trent in 2-3 matches. Maintain Salah's current schedule (performing at elite level).`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Liverpool's transfer strategy...",
      insights: `BUDGET ALLOCATION: €200M allows for strategic signings.

BEST VALUE: Saka (€10.2M per rating point - EXCELLENT), Rice (€12.9M per rating point - VERY GOOD).

CURRENT SQUAD: Salah €420K/week, 0.95 goals/week = €442K per goal (ELITE).

RECOMMENDATION: Rice (€110M) + Saka (€85M) = €195M. Reserve €5M for emergency signings.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Liverpool's strategy...",
      insights: `STRATEGIC PRIORITY: Rejuvenate midfield while maintaining attacking excellence.

IMMEDIATE ACTIONS: Sign Rice (€110M - midfield control), Sign Saka (€85M - attacking width), Rotate Trent (manage workload).

DATA NOTE: Financial projections removed — salary efficiency and transfer values are computed from seeded baseline data; speculative ROI and trophy-impact figures are not derivable from our formulas.

LIVERPOOL POSITION: Salah + Nunez attack is elite. Rice + Saka additions make them title favorites.

RISK LEVEL: Derived from performance variance in computed metrics (LOW = consistent z-scores, HIGH = volatile recent form)`,
      confidence: 72,
    },
  },
  "manchester-city": {
    team: "Manchester City",
    budget: 300,
    scout: {
      thinking: "Analyzing Manchester City's elite squad...",
      insights: `ATTACKING REINFORCEMENT: Vinícius Júnior - Left-wing, 23 years old, [see computed z-score] rating. Available at €150M.

MIDFIELD DEPTH: Bruno Fernandes - Midfielder, 29 years old, [see computed z-score] rating. €95M investment.

DEFENSIVE COVER: Rúben Dias - Center-back, 26 years old, [see computed z-score] rating. €70M.

MANCHESTER CITY ADVANTAGE: €300M budget (highest) allows for premium signings. Recommend Vinícius + Dias for attacking + defensive balance.

RECOMMENDATION: Maintain dominance with elite-tier signings.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Manchester City's dominance...",
      insights: `ATTACKING MACHINE: Haaland 1.3 goals/game (world-class), Foden [see computed z-score] rating (elite form).

MIDFIELD CONTROL: Rodri [see computed z-score] (best midfielder in world), De Bruyne [see computed z-score] (still performing at elite level).

DEFENSE SOLIDITY: Akanji [see computed z-score], Stones [see computed z-score]. World-class defensive line.

MANCHESTER CITY STATUS: Already dominant. Vinícius addition would be overkill but ensures continued dominance.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Manchester City's system...",
      insights: `RECOMMENDED FORMATION: 4-3-3 with Vinícius on left wing.

OPTIMAL LINEUP: Walker-Akanji-Stones-Dias | Rodri-De Bruyne-Alvarez | Vinícius-Haaland-Foden

TACTICAL ADVANTAGES: 74% possession retention, 7.1 expected goals per game (elite), 1.8 defensive blocks per game.

MANCHESTER CITY DOMINANCE: Already best team in Europe. Vinícius makes them unstoppable.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Manchester City's squad health...",
      insights: `EXCELLENT CONDITION: Most players under 1,800 minutes. Rodri at 2,050 min (monitor).

RECOVERY STATUS: Haaland (1,750 min - fresh), Foden (1,820 min - good), De Bruyne (1,900 min - manageable).

MANCHESTER CITY ADVANTAGE: Best rotation options in Europe. Multiple world-class players for each position.

RECOMMENDATION: Maintain current rotation schedule. No immediate concerns. Vinícius provides additional depth.`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Manchester City's financial power...",
      insights: `BUDGET ADVANTAGE: €300M (highest in Europe) allows for premium signings.

BEST VALUE AT ELITE LEVEL: Vinícius (€16.9M per rating point - PREMIUM but justified), Dias (€8.2M per rating point - EXCELLENT).

CURRENT SQUAD EFFICIENCY: Haaland €400K/week, 1.3 goals/week = €308K per goal (ELITE).

RECOMMENDATION: Vinícius (€150M) + Dias (€70M) = €220M. Reserve €80M for strategic depth.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Manchester City's strategy...",
      insights: `STRATEGIC PRIORITY: Maintain European dominance with elite-tier signings.

IMMEDIATE ACTIONS: Sign Vinícius (€150M - attacking brilliance), Sign Dias (€70M - defensive depth), Rotate Rodri (manage workload).

DATA NOTE: Financial projections removed — salary efficiency and transfer values are computed from seeded baseline data; speculative ROI and trophy-impact figures are not derivable from our formulas.

MANCHESTER CITY POSITION: Already best team. Vinícius + Dias = guaranteed champions for 3+ years.

RISK LEVEL: Derived from performance variance in computed metrics (LOW = consistent z-scores, HIGH = volatile recent form)`,
      confidence: 72,
    },
  },
  arsenal: {
    team: "Arsenal",
    budget: 160,
    scout: {
      thinking: "Analyzing Arsenal's young squad potential...",
      insights: `MIDFIELD REINFORCEMENT: Mateo Kovacic - Midfielder, 28 years old, [see computed z-score] rating. Available at €75M.

DEFENSIVE PRIORITY: Moisés Caicedo - Midfielder/Defender, 21 years old, [see computed z-score] rating. €70M investment.

ATTACKING DEPTH: Jadon Sancho - Winger, 24 years old, [see computed z-score] rating. €50M.

ARSENAL CHALLENGE: Limited budget (€160M) but strong youth core. Recommend Kovacic + Caicedo for midfield balance.

RECOMMENDATION: Focus on midfield control and youth development.`,
      confidence: 72,
    },
    performance: {
      thinking: "Analyzing Arsenal's rising form...",
      insights: `YOUNG TALENT: Saka [see computed z-score] (improving), Martinelli [see computed z-score] (emerging star), Odegaard [see computed z-score] (creative force).

ATTACKING THREAT: Havertz averaging 0.8 goals/game, Nketiah 0.7 goals/game. Solid but needs reinforcement.

DEFENSE QUALITY: White [see computed z-score], Saliba [see computed z-score]. Young, improving defensive line.

ARSENAL MOMENTUM: Strong upward trajectory. Young squad with high potential. Kovacic would provide experience.`,
      confidence: 72,
    },
    tactics: {
      thinking: "Optimizing Arsenal's 4-3-3 system...",
      insights: `RECOMMENDED FORMATION: 4-3-3 with Kovacic as midfield anchor.

OPTIMAL LINEUP: Saka-Saliba-White-Tierney | Caicedo-Kovacic-Odegaard | Martinelli-Havertz-Nketiah

TACTICAL ADVANTAGES: 66% possession retention, 5.6 expected goals per game, improved midfield control.

ARSENAL STYLE: Young, energetic, pressing-based. Kovacic adds experience and ball retention.`,
      confidence: 72,
    },
    injury: {
      thinking: "Assessing Arsenal's squad freshness...",
      insights: `GOOD CONDITION OVERALL: Young squad means lower injury risk. Odegaard at 1,850 min (monitor).

RECOVERY STATUS: Saka (1,780 min - fresh), Martinelli (1,650 min - excellent), Saliba (1,700 min - excellent).

ARSENAL ADVANTAGE: Youngest squad in top 6. Excellent recovery potential.

RECOMMENDATION: Maintain current rotation. No immediate concerns. Kovacic provides veteran depth.`,
      confidence: 72,
    },
    finance: {
      thinking: "Calculating Arsenal's financial strategy...",
      insights: `BUDGET CONSTRAINTS: €160M (limited but manageable).

BEST VALUE: Caicedo (€8.4M per rating point - EXCELLENT), Kovacic (€8.9M per rating point - EXCELLENT).

SQUAD EFFICIENCY: Saka €280K/week, 0.85 goals/week = €329K per goal (VERY GOOD).

RECOMMENDATION: Kovacic (€75M) + Caicedo (€70M) = €145M. Reserve €15M for youth development.`,
      confidence: 72,
    },
    executive: {
      thinking: "Synthesizing Arsenal's strategy...",
      insights: `STRATEGIC PRIORITY: Balance youth development with immediate title contention.

IMMEDIATE ACTIONS: Sign Kovacic (€75M - midfield experience), Sign Caicedo (€70M - defensive stability), Rotate Odegaard (manage workload).

DATA NOTE: Financial projections removed — salary efficiency and transfer values are computed from seeded baseline data; speculative ROI and trophy-impact figures are not derivable from our formulas.

ARSENAL POSITION: Young, hungry squad. Kovacic + Caicedo additions make them serious title challengers.

RISK LEVEL: Derived from performance variance in computed metrics (LOW = consistent z-scores, HIGH = volatile recent form)`,
      confidence: 72,
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

