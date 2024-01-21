export const courseData = [
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg",
    name: "ios Development",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/ios-development",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg",
    name: "React",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/react",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg",
    name: "Intro ro Python",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/python-basic",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg",
    name: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/python-advance",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg",
    name: "Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/information-security-advance",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg",
    name: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/training-of-trainers",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg",
    name: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/blockchain",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg",
    name: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/devops",
  },
  {
    image:
      "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg",
    name: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
    details: "https://www.tbcacademy.ge/usaid/information-security-basic",
  },
];

export const createCard = (course) => {
  const { image, name, status, details } = course;
  const cardHTML = `
      <div class="course-card">
        <img src="${image}" alt="${name}" class="course-image">
        <h2 class="course-name">${name}</h2>
        <p class="course-status">${status}</p>
        <a href="${details}" class="course-details">&#10132; კურსის დეტალები</a>
      </div>
    `;
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = cardHTML;

  return cardContainer.firstElementChild;
};
