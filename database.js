// RED SOIL DATABASE FILE (EXPANDED UNIVERSE v2.0)
// 包含 30 位可玩角色、海量物品、與擴展地圖

loadWorldData({
    // =============================================================
    // 1. 物品定義 (ITEMS) - 生存、劇情、各國護照、暗黑道具
    // =============================================================
    items: {
        // --- 食品與飲水 (Food & Drink) ---
        'water_dirty': { name: '混濁的生水', type: 'consumable', effect: { hp: -5, san: -2 }, desc: '從水龍頭接的，喝了可能會拉肚子，但總比渴死好。' },
        'water_clean': { name: '瓶裝礦泉水', type: 'consumable', effect: { hp: 10, san: 5 }, desc: '乾淨的水源，在這裡是硬通貨。' },
        'bread_moldy': { name: '發霉麵包', type: 'consumable', effect: { hp: 5, san: -5 }, desc: '剝掉綠色的部分勉強能吃，口感像木屑。' },
        'instant_noodle': { name: '紅燒牛肉麵', type: 'consumable', effect: { hp: 20, san: 10 }, desc: '來自家鄉的味道。乾吃很脆，有熱水就是盛宴。' },
        'compressed_biscuit': { name: '軍用壓縮餅乾', type: 'consumable', effect: { hp: 30, san: 0 }, desc: '極度乾燥，一小塊能頂一天餓，但難以下嚥。' },
        'chips': { name: '洋芋片', type: 'consumable', effect: { hp: 5, san: 15 }, desc: '垃圾食物帶來的快樂是短暫而真實的。' },
        'energy_drink': { name: '提神飲料', type: 'consumable', effect: { hp: 5, san: 10 }, desc: '讓你在加班或逃跑時保持清醒。' },
        'rotten_meat': { name: '腐爛的肉', type: 'consumable', effect: { hp: -20, san: -20 }, desc: '散發惡臭。只有想自殺或快餓死的人才會吃。' },

        // --- 醫療與藥品 (Medical) ---
        'medkit': { name: '戰術醫療包', type: 'consumable', effect: { hp: 60 }, desc: '包含縫合針、紗布與抗生素。' },
        'bandage': { name: '髒繃帶', type: 'consumable', effect: { hp: 15 }, desc: '勉強能止血，但可能會感染。' },
        'tourniquet': { name: '止血帶', type: 'consumable', effect: { hp: 40 }, desc: '針對大動脈出血的救命神器。' },
        'vitamins': { name: '綜合維生素', type: 'consumable', effect: { hp: 5, san: 5 }, desc: '長期營養不良的身體需要這個。' },
        'painkillers': { name: '強效止痛藥', type: 'consumable', effect: { hp: 10, san: 20 }, desc: '暫時麻痺肉體的痛苦。' },
        'pills_sedative': { name: '鎮靜劑', type: 'consumable', effect: { san: 40, hp: -5 }, desc: '讓腦中的尖叫聲停下來。副作用是嗜睡。' },
        'adrenaline': { name: '腎上腺素', type: 'consumable', effect: { hp: 20, san: 20 }, desc: '不管是戰鬥還是逃跑，插在大腿上就對了。' },

        // --- 關鍵道具與護照 (Keys & Passports) ---
        'passport_tw': { name: '中華民國護照', type: 'key', desc: '深綠色的本子。雖然國際處境艱難，但辦事處會救你。' },
        'passport_cn': { name: '中國護照', type: 'key', desc: '暗紅色的本子。聽說大使館最近在嚴打園區，或許有用。' },
        'passport_us': { name: '美國護照', type: 'key', desc: '藍色的老鷹。只要到了大使館，海軍陸戰隊就在門後。' },
        'passport_uk': { name: '英國護照', type: 'key', desc: '女王(或國王)的庇護。強大的外交籌碼。' },
        'passport_jp': { name: '日本護照', type: 'key', desc: '菊紋封面。免簽國最多的護照，自由的象徵。' },
        'passport_ca': { name: '加拿大護照', type: 'key', desc: '楓葉封面。能讓你在北美獲得庇護。' },
        'passport_kp': { name: '朝鮮護照', type: 'misc', desc: '來自北韓。即使逃到大使館，他們也可能把你遣返回去槍斃。毫無用處。' },
        
        'id_card_lvl1': { name: '臨時工識別證', type: 'key', desc: '只能進出食堂和宿舍。' },
        'id_card_lvl3': { name: '主管門禁卡', type: 'key', desc: '權限很高，可以開啟機房和後門。' },
        'car_keys': { name: '皮卡車鑰匙', type: 'key', desc: '這輛車可能停在後門，油箱不知道是不是滿的。' },
        'sim_card': { name: '泰國網卡', type: 'misc', desc: '如果能連上漫遊訊號，就能求救。' },
        'usb_evidence': { name: '加密硬碟', type: 'misc', desc: '紀錄了所有受害者名單與器官流向。' },
        'cash_stack': { name: '一疊美金', type: 'consumable', effect: { money: 500 }, desc: '厚厚一疊，大概有五千刀。有錢能使鬼推磨。' },
        'gold_ring': { name: '金戒指', type: 'consumable', effect: { money: 100 }, desc: '從屍體手上拔下來的，可以當作盤纏。' },

        // --- 暗黑與特殊道具 (Dark & Misc) ---
        'knife': { name: '折疊刀', type: 'misc', desc: '防身用。如果你敢用的話。' },
        'taser': { name: '電擊棒', type: 'misc', desc: '沒電了，但拿在手上還是很嚇人。' },
        'condom': { name: '保險套', type: 'misc', desc: '在這裡，這比黃金還重要，能預防絕望的疾病。' },
        'lingerie': { name: '情趣內衣', type: 'misc', desc: '布料極少，會所強迫穿上的「工作服」。' },
        'pregnancy_test': { name: '驗孕棒', type: 'misc', desc: '兩條線意味著地獄中的地獄。' },
        'lubricant': { name: '潤滑液', type: 'misc', desc: '減輕肉體的撕裂痛，但無法減輕心裡的痛。' },
        'whip': { name: '皮鞭', type: 'misc', desc: '沾著血。通常是用在別人身上的，現在在你手上。' }
    },

    // =============================================================
    // 2. 地圖節點 (MAP) - 3倍擴充
    // =============================================================
    map: {
        // --- A區：生活與囚禁 (The Cage) ---
        'dorm_f': { name: '女工宿舍', desc: '充滿汗味與霉味。牆上刻著「我想回家」。', exits: ['canteen', 'massage_parlor', 'laundry_room'], loot: ['water_dirty'] },
        'dorm_m': { name: '男工宿舍', desc: '鐵架床密密麻麻，地上有針頭。', exits: ['canteen', 'scam_office', 'fight_club'], loot: ['knife'] },
        'canteen': { name: '員工食堂', desc: '提供發餿的飯菜。大家都低頭快速吞嚥。', exits: ['dorm_f', 'dorm_m', 'kitchen', 'main_plaza'], loot: ['bread_moldy'] },
        'kitchen': { name: '後廚房', desc: '油煙味極重。垃圾桶裡也許有剩飯。', exits: ['canteen', 'back_alley'], loot: ['rotten_meat', 'knife'] },
        'laundry_room': { name: '洗衣房', desc: '巨大的轟鳴聲掩蓋了交談。這裡是交換情報的地方。', exits: ['dorm_f', 'vent_shaft'], loot: ['id_card_lvl1'] },
        'vent_shaft': { name: '通風管道', desc: '狹窄、黑暗，滿是老鼠。', exits: ['laundry_room', 'server_room'] },

        // --- B區：工作與刑罰 (The Factory) ---
        'scam_office': { name: '詐騙辦公室', desc: '數百台電腦。鍵盤敲擊聲中夾雜著電擊棒的滋滋聲。', exits: ['server_room', 'ceo_office', 'dorm_m'], loot: ['energy_drink'] },
        'ceo_office': { name: '老闆辦公室', desc: '裝修豪華，擺著關公像。桌上有雪茄和護照。', exits: ['scam_office'], loot: ['passport_cn', 'cash_stack', 'car_keys'] },
        'server_room': { name: '機房重地', desc: '冷氣很強。這裡存著核心數據。', exits: ['scam_office', 'vent_shaft'], loot: ['usb_evidence'] },
        'dungeon': { name: '地下水牢', desc: '及腰的污水，漂浮著排泄物。有人被吊在牆上。', exits: ['blood_room', 'main_plaza'], loot: ['bread_moldy'] },
        'blood_room': { name: '採血室', desc: '掛滿了血袋。幾個臉色慘白的人被綁在椅子上。', exits: ['dungeon', 'clinic'], loot: ['tourniquet'] },
        'clinic': { name: '地下診所', desc: '名義上是醫務室，實際上在摘除器官。', exits: ['blood_room', 'morgue'], loot: ['medkit', 'adrenaline'] },
        'morgue': { name: '停屍間', desc: '堆疊著不再動彈的軀體，準備運往亂葬崗。', exits: ['clinic', 'back_alley'], loot: ['gold_ring'] },

        // --- C區：聲色與墮落 (The Red Light) ---
        'massage_parlor': { name: '粉紅養生館', desc: '名為按摩，實為淫窟。充滿廉價香水味。', exits: ['dorm_f', 'ktv_hall', 'private_room'], loot: ['condom', 'lingerie'] },
        'ktv_hall': { name: 'KTV 大廳', desc: '震耳欲聾的音樂掩蓋了尖叫聲。醉醺醺的軍閥在這裡消費。', exits: ['ktv_vip', 'massage_parlor', 'main_plaza'], loot: ['chips'] },
        'ktv_vip': { name: 'VIP 包廂', desc: '大老闆們正在吸食粉末，場面不堪入目。', exits: ['ktv_hall', 'casino_floor'], loot: ['cash_stack', 'pills_sedative'] },
        'private_room': { name: '私人調教室', desc: '牆上挂滿刑具。床上有一件被撕爛的學生制服。', exits: ['massage_parlor'], loot: ['pregnancy_test', 'whip'] },
        'fight_club': { name: '地下格鬥場', desc: '男工宿舍的地下室。贏家拿麵包，輸家斷腿。', exits: ['dorm_m'], loot: ['painkillers'] },
        'casino_floor': { name: '賭場大廳', desc: '老虎機的聲音響個不停。這裡是洗錢中心。', exits: ['ktv_vip', 'street_exit'], loot: ['water_clean'] },

        // --- D區：外部與逃亡 (The Escape) ---
        'main_plaza': { name: '園區廣場', desc: '憲兵持槍巡邏。正門守備森嚴。', exits: ['canteen', 'dungeon', 'ktv_hall', 'street_exit'] },
        'back_alley': { name: '後巷垃圾場', desc: '堆滿了電子垃圾和醫療廢棄物。牆上有個洞。', exits: ['kitchen', 'morgue', 'slum_area'], loot: ['crowbar'] },
        'street_exit': { name: '西港大街', desc: '終於出來了。但別高興太早，這裡滿街都是黑警與綁匪。', exits: ['main_plaza', 'police_station', 'general_store', 'embassy_district', 'slum_area', 'construction_site'] },
        
        'slum_area': { name: '貧民窟', desc: '鐵皮屋與污水的迷宮。當地人可能會幫你，也可能賣了你。', exits: ['street_exit', 'riverbank'], loot: ['instant_noodle'] },
        'construction_site': { name: '爛尾樓工地', desc: '鋼筋裸露。很多逃跑失敗的人被埋在這裡。', exits: ['street_exit'], loot: ['helmet'] },
        'riverbank': { name: '邊境河岸', desc: '河對岸就是泰國。水流湍急。', exits: ['slum_area', 'smuggler_boat'] },
        'smuggler_boat': { name: '偷渡船', desc: '船夫要價很高。你有錢嗎？(結局點)', exits: ['riverbank'] },

        // --- E區：求救點 (The Hope & Trap) ---
        'police_station': { name: '波哥大警局', desc: '這裡的警察眼神貪婪。付不起錢的人會被當場賣回園區。', exits: ['street_exit'], loot: ['taser'] },
        'general_store': { name: '華人雜貨店', desc: '老闆是好人，會偷偷賣給你物資。', exits: ['street_exit'], loot: ['medkit', 'water_clean', 'compressed_biscuit'] },
        'embassy_district': { name: '使館特區', desc: '前方有重兵把守。你需要證明你是該國公民。', exits: ['street_exit', 'embassy_gate'] },
        'embassy_gate': { name: '辦事處大門', desc: '高聳的鐵柵欄內是自由的領土。警衛看著你：「護照呢？」(結局點)', exits: ['embassy_district'] }
    },

    // =============================================================
    // 3. 角色庫 (CHARACTERS) - 30位可玩角色
    // =============================================================
    characters: [
        // --- 1. 核心主角群 ---
        { id: 'c01', name: 'Bella', role: '高職校花', hp: 60, san: 40, money: 0, start: 'massage_parlor', items: ['lingerie', 'condom'], desc: "被閨蜜以免費旅遊騙來。現在她穿著暴露的蕾絲內衣，被迫在養生館「接客」。" },
        { id: 'c02', name: 'Kevin', role: '熱音社大學生', hp: 80, san: 60, money: 50, start: 'ktv_hall', items: ['sim_card'], desc: "以為是來海外駐唱，結果被扣押在 KTV 當少爺，稍有反抗就會被毆打。" },
        { id: 'c03', name: '陳浩', role: '臥底刑警', hp: 95, san: 90, money: 200, start: 'dungeon', items: ['knife'], desc: "為了調查器官販賣集團主動被抓。開局被關在水牢，身手矯健。" },
        
        // --- 2. 聲色場所受害者 ---
        { id: 'c04', name: 'Yuri', role: '落魄網紅', hp: 50, san: 30, money: 10, start: 'ktv_vip', items: ['pregnancy_test'], desc: "欠下高利貸後來這裡還債。剛在 VIP 包廂服侍完一個軍閥。" },
        { id: 'c05', name: '美雲', role: '單親媽媽', hp: 40, san: 70, money: 20, start: 'dorm_f', items: ['medkit'], desc: "為了給孩子籌手術費被騙。每天在接客與自殺的念頭中掙扎。" },
        { id: 'c06', name: '小雅', role: '未成年陪侍', hp: 45, san: 20, money: 0, start: 'private_room', items: ['lubricant'], desc: "謊報年齡來打工，結果掉進地獄。她還太小，承受不了那些變態。" },
        { id: 'c07', name: 'Rose', role: '媽媽桑', hp: 70, san: 10, money: 500, start: 'massage_parlor', items: ['pills_sedative', 'cash_stack'], desc: "曾經也是受害者，現在為了生存成為了管理受害者的加害者。" },
        { id: 'c08', name: 'Cindy', role: '美甲師', hp: 55, san: 45, money: 30, start: 'massage_parlor', items: ['lingerie'], desc: "手藝很好，但這裡不需要美甲，只需要肉體。" },
        { id: 'c09', name: 'Coco', role: '直播主', hp: 50, san: 20, money: 5, start: 'private_room', items: ['condom'], desc: "以為是來做帶貨直播，結果是裸聊與色情直播。" },

        // --- 3. 園區底層勞工 ---
        { id: 'c10', name: '老張', role: '爛賭鬼', hp: 30, san: 50, money: 0, start: 'blood_room', items: ['bandage'], desc: "在賭場輸光了一切，現在是「血奴」，每週被抽 800cc 血。" },
        { id: 'c11', name: 'Jason', role: '矽谷工程師', hp: 60, san: 60, money: 100, start: 'scam_office', items: ['usb_evidence'], desc: "被獵人頭公司騙來寫詐騙後台程式。想用程式碼發送求救訊號。" },
        { id: 'c12', name: '阿強', role: '板模工', hp: 100, san: 70, money: 10, start: 'dorm_m', items: ['knife'], desc: "力氣很大，但在槍口下毫無用處。正在策劃暴動。" },
        { id: 'c13', name: 'Alice', role: '英文老師', hp: 60, san: 50, money: 40, start: 'scam_office', items: ['instant_noodle'], desc: "原本以為是來教國際學校的，現在被迫用英文詐騙歐美老人。" },
        { id: 'c14', name: '阿土', role: '農民', hp: 90, san: 60, money: 5, start: 'dorm_m', items: ['bread_moldy'], desc: "為了還債賣身，連字都不太識，只能做苦力。" },
        { id: 'c15', name: '林林', role: '應屆畢業生', hp: 75, san: 50, money: 20, start: 'scam_office', items: ['water_clean'], desc: "第一份工作就是地獄。還沒適應這裡的殘酷。" },
        { id: 'c16', name: 'Ben', role: '健身教練', hp: 95, san: 50, money: 15, start: 'main_plaza', items: ['vitamins'], desc: "身材壯碩，被當作搬運工。但他有體力逃跑。" },
        { id: 'c17', name: 'Mina', role: '百貨櫃姐', hp: 60, san: 35, money: 25, start: 'ktv_hall', items: ['painkillers'], desc: "每天被逼酒到胃出血。再喝下去就要死了。" },
        { id: 'c18', name: '阿傑', role: '刺青師', hp: 80, san: 70, money: 60, start: 'fight_club', items: ['knife'], desc: "因為拒絕幫黑道刺青被打斷手，現在在地下格鬥場苟活。" },
        { id: 'c19', name: '老陳', role: '食堂廚師', hp: 80, san: 60, money: 80, start: 'kitchen', items: ['rotten_meat'], desc: "掌握著食堂的生殺大權。知道後巷的秘密出口。" },
        
        // --- 4. 專業人士與特殊背景 ---
        { id: 'c20', name: '李醫師', role: '無國界醫生', hp: 70, san: 80, money: 200, start: 'clinic', items: ['medkit', 'id_card_lvl3'], desc: "被綁架來進行非法器官摘除手術。內心飽受煎熬，但有權限卡。" },
        { id: 'c21', name: 'Sophie', role: '戰地記者', hp: 70, san: 90, money: 300, start: 'general_store', items: ['passport_uk'], desc: "深入險境調查真相。持有英國護照，只要能到大使館就贏了。" },
        { id: 'c22', name: '王總', role: '落馬高官', hp: 50, san: 40, money: 1000, start: 'ktv_vip', items: ['passport_cn', 'cash_stack'], desc: "攜款潛逃結果被黑吃黑。雖然有錢，但在這裡肥羊死得最快。" },
        { id: 'c23', name: 'Mark', role: '美國遊客', hp: 80, san: 70, money: 150, start: 'police_station', items: ['passport_us'], desc: "迷路問路結果被警察賣進來。持有最強的美國護照，但不懂中文。" },
        { id: 'c24', name: '阿飛', role: '當地導遊', hp: 80, san: 80, money: 50, start: 'slum_area', items: ['knife'], desc: "看不慣同胞被賣，暗中幫助逃跑者。熟悉地形。" },
        { id: 'c25', name: '小劉', role: '車手', hp: 80, san: 50, money: 200, start: 'street_exit', items: ['car_keys'], desc: "負責幫園區運送物資。手上有車鑰匙，有機會直接開車衝出去。" },
        { id: 'c26', name: '金同志', role: '脫北者', hp: 90, san: 90, money: 5, start: 'construction_site', items: ['passport_kp'], desc: "好不容易逃出北韓，結果掉進另一個地獄。持有毫無用處的朝鮮護照。" },
        { id: 'c27', name: '田中', role: '日本背包客', hp: 70, san: 60, money: 300, start: 'casino_floor', items: ['passport_jp', 'chips'], desc: "在賭場被下藥。持有日本護照。" },
        { id: 'c28', name: '阿邦', role: '毒販', hp: 70, san: 30, money: 400, start: 'dungeon', items: ['pills_sedative'], desc: "黑吃黑失敗被關進來。對毒品很了解。" },
        { id: 'c29', name: 'No.4092', role: '無名血奴', hp: 20, san: 10, money: 0, start: 'blood_room', items: [], desc: "已經被抽乾了，連名字都忘了。生存難度：極高。" },
        { id: 'c30', name: '周董', role: '破產老闆', hp: 40, san: 30, money: 0, start: 'canteen', items: [], desc: "曾經身價上億，現在搶發霉麵包吃。無法接受現實。" }
    ]
});