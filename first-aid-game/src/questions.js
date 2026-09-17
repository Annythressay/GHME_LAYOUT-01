const sources = {
  steps: 'https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps',
  cpr: 'https://guidelines.redcross.org/guidelines-database/cpr-techniques-and-sequence/',
  aed: 'https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-cardiac-arrest',
  breathing: 'https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person',
  bleeding: 'https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external',
  burns: 'https://www.redcross.org.uk/first-aid/learn-first-aid/burns',
};

// Educational sample questions, not a clinical assessment or certification.
export const questions = [
  {
    id: 'response', category: 'Nhận diện tình huống', scene: 'Một hành động đúng.\nMột cơ hội được trao.', image: 'bidv',
    imageAlt: 'Ảnh minh họa buổi thực hành sơ cứu với mô hình tại văn phòng',
    question: 'Một người đột ngột gục xuống. Khi hiện trường đã an toàn, bạn cần làm gì trước tiên?',
    answers: ['Kiểm tra phản ứng và nhịp thở, gọi hỗ trợ', 'Cho người đó uống nước', 'Đứng chờ người đó tự tỉnh lại', 'Lập tức kéo người đó đứng dậy'], correct: 0,
    hint: 'Bắt đầu bằng việc nhận biết tình trạng của người cần giúp đỡ.',
    explanation: 'Kiểm tra phản ứng và thở bình thường trong tối đa 10 giây. Nếu không phản ứng và không thở bình thường, kích hoạt cấp cứu, bắt đầu CPR và dùng AED khi có.', source: sources.steps,
  },
  {
    id: 'safety', category: 'An toàn hiện trường', scene: 'An toàn cho bạn.\nAn toàn để giúp người.', image: 'frasers', imageAlt: 'Ảnh minh họa tập huấn an toàn tại công trường',
    question: 'Trước khi tiếp cận một người bị nạn, điều gì cần được ưu tiên?',
    answers: ['Chụp ảnh hiện trường', 'Kiểm tra an toàn của khu vực xung quanh', 'Di chuyển mọi vật dụng gần đó', 'Lập tức chạy đến bất kể nguy hiểm'], correct: 1,
    hint: 'Bạn chỉ có thể hỗ trợ tốt khi bản thân không gặp nguy hiểm.',
    explanation: 'Quan sát các nguy cơ như điện, giao thông hoặc lửa trước khi tiếp cận. Đừng tự đưa mình vào tình huống nguy hiểm.', source: sources.steps,
  },
  {
    id: 'cpr', category: 'Hồi sinh tim phổi', scene: 'Bình tĩnh quan sát.\nChủ động hành động.', image: 'toyota', imageAlt: 'Ảnh minh họa thực hành hồi sinh tim phổi trên mô hình',
    question: 'Người lớn không phản ứng và chỉ thở ngáp cá. Sau khi kích hoạt cấp cứu, bạn cần làm gì?',
    answers: ['Chờ nhịp thở tự trở lại', 'Cho uống nước đường', 'Bắt đầu CPR và dùng AED khi có', 'Đỡ người đó ngồi dậy'], correct: 2,
    hint: 'Thở ngáp cá không phải là thở bình thường.',
    explanation: 'Không phản ứng và không thở bình thường là dấu hiệu cần CPR. Nhờ người gọi cấp cứu và lấy AED; làm theo hướng dẫn của tổng đài.', source: sources.cpr,
  },
  {
    id: 'rate', category: 'Hồi sinh tim phổi', scene: 'Nhịp ép đúng.\nTiếp nối cơ hội sống.', image: 'yody', imageAlt: 'Ảnh minh họa học viên thực hành ép tim trên mô hình',
    question: 'Tần số ép ngực được khuyến nghị khi thực hiện CPR cho người lớn là bao nhiêu?',
    answers: ['40–60 lần/phút', '60–80 lần/phút', '160–180 lần/phút', '100–120 lần/phút'], correct: 3,
    hint: 'Ép ngực cần đều, nhanh và liên tục.',
    explanation: 'Ép ngực 100–120 lần/phút, để ngực nở lại hoàn toàn sau mỗi lần ép và hạn chế gián đoạn.', source: sources.cpr,
  },
  {
    id: 'aed', category: 'Sử dụng AED', scene: 'Lắng nghe hướng dẫn.\nTừng bước hỗ trợ.', image: 'olympia', imageAlt: 'Ảnh minh họa buổi đào tạo kiến thức sơ cứu',
    question: 'AED đang phân tích nhịp tim hoặc chuẩn bị sốc điện. Bạn cần bảo đảm điều gì?',
    answers: ['Không ai chạm vào người đang được cấp cứu', 'Một người giữ chặt hai tay người đó', 'Tiếp tục chạm để kiểm tra phản ứng', 'Tháo các miếng điện cực'], correct: 0,
    hint: 'Hãy làm theo hướng dẫn bằng giọng nói của thiết bị.',
    explanation: 'Tránh chạm vào người bệnh khi AED phân tích hoặc sốc điện. Tiếp tục CPR ngay khi thiết bị hướng dẫn.', source: sources.aed,
  },
  {
    id: 'bleeding', category: 'Xử trí chảy máu', scene: 'Nhận biết sớm.\nHỗ trợ kịp thời.', image: 'interfood', imageAlt: 'Ảnh minh họa hướng dẫn sử dụng bộ dụng cụ sơ cứu',
    question: 'Một vết thương ngoài da đang chảy máu nhiều. Biện pháp ban đầu phù hợp là gì?',
    answers: ['Liên tục nhấc gạc lên xem', 'Ép trực tiếp, chắc và liên tục lên vết thương', 'Chỉ lau máu xung quanh', 'Để vết thương tự khô'], correct: 1,
    hint: 'Dùng gạc hoặc vải sạch để tạo áp lực tại vị trí chảy máu.',
    explanation: 'Gọi cấp cứu khi chảy máu nghiêm trọng. Dùng gạc hoặc vải sạch ép trực tiếp, chắc và liên tục; bảo vệ bản thân khỏi tiếp xúc với máu.', source: sources.bleeding,
  },
  {
    id: 'burn', category: 'Sơ cứu bỏng', scene: 'Kiến thức thiết thực.\nBảo vệ mỗi ngày.', image: 'amon', imageAlt: 'Ảnh minh họa giáo viên trong buổi học sơ cứu',
    question: 'Với một vết bỏng nhiệt nhỏ, nên làm mát vùng bỏng bằng cách nào?',
    answers: ['Bôi kem đánh răng ngay', 'Chườm đá trực tiếp lên da', 'Làm mát dưới vòi nước mát ít nhất 20 phút', 'Bôi dầu ăn lên vùng bỏng'], correct: 2,
    hint: 'Nước mát giúp làm giảm nhiệt tại vùng bị bỏng.',
    explanation: 'Làm mát vết bỏng bằng nước mát chảy nhẹ ít nhất 20 phút. Giữ ấm phần cơ thể còn lại; không dùng đá trực tiếp hoặc kem đánh răng.', source: sources.burns,
  },
  {
    id: 'breathing', category: 'Theo dõi người bị nạn', scene: 'Ở bên hỗ trợ.\nQuan sát từng thay đổi.', image: 'tri-thien', imageAlt: 'Ảnh minh họa hướng dẫn kỹ năng chăm sóc và sơ cứu',
    question: 'Người không phản ứng nhưng vẫn thở bình thường, không có dấu hiệu chấn thương. Nên làm gì?',
    answers: ['Bắt đầu ép ngực ngay', 'Cho uống nước', 'Để người đó một mình', 'Gọi cấp cứu, đặt tư thế hồi phục và theo dõi thở'], correct: 3,
    hint: 'Ưu tiên giữ đường thở thông thoáng và tiếp tục quan sát.',
    explanation: 'Đặt tư thế hồi phục khi phù hợp, gọi cấp cứu và theo dõi nhịp thở. Nếu chuyển sang không thở bình thường, bắt đầu CPR theo hướng dẫn.', source: sources.breathing,
  },
  {
    id: 'help', category: 'Kích hoạt hỗ trợ', scene: 'Phối hợp rõ ràng.\nHỗ trợ hiệu quả hơn.', image: 'olympia', imageAlt: 'Ảnh minh họa học viên trao đổi cùng giảng viên sơ cứu',
    question: 'Có người xung quanh khi bạn đang hỗ trợ cấp cứu. Cách nhờ giúp đỡ nào phù hợp nhất?',
    answers: ['Chỉ định một người gọi cấp cứu và lấy AED nếu có', 'Chờ mọi người tự phân công', 'Yêu cầu mọi người rời đi', 'Dừng hỗ trợ để quay video'], correct: 0,
    hint: 'Phân công rõ một việc cho một người cụ thể.',
    explanation: 'Nhờ một người gọi cấp cứu, một người tìm AED nếu có. Phối hợp với người hỗ trợ và làm theo hướng dẫn tổng đài.', source: sources.steps,
  },
  {
    id: 'monitor', category: 'Chăm sóc tiếp tục', scene: 'Sơ cứu là kỹ năng.\nThực hành để sẵn sàng.', image: 'bidv', imageAlt: 'Ảnh minh họa thực hành sơ cứu tại lớp đào tạo GHME',
    question: 'Sau khi gọi cấp cứu và sơ cứu ban đầu, bạn nên làm gì trong lúc chờ hỗ trợ?',
    answers: ['Rời đi khi người đó có vẻ ổn', 'Ở lại, trấn an và theo dõi thay đổi tình trạng', 'Cho ăn để hồi sức ngay', 'Ngừng quan sát hoàn toàn'], correct: 1,
    hint: 'Tình trạng có thể thay đổi trong khi chờ nhân viên y tế.',
    explanation: 'Ở lại nếu an toàn, trấn an và theo dõi phản ứng, nhịp thở. Điều chỉnh hỗ trợ theo tình trạng và hướng dẫn của tổng đài.', source: sources.bleeding,
  },
];
