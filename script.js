const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const subjects = {
  hdl: {
    title: 'Introduction to HDL – CPEP 321',
    description: 'This subject covers the fundamentals of Hardware Description Languages (HDL) such as Verilog and VHDL. It teaches how to design and simulate digital circuits.',
    projects: [
      {
        title: 'Semi Finals HDL',
        description: 'Semi-Finals',
        link: 'https://www.youtube.com/playlist?list=PLzyDJLW7kmXQTNyjaoV_-uOjHjhP8Z-QZ'
        
      },
      {
        title: 'Binary to Hexadecimal',
        description: 'FInal Project.',
        link: 'https://www.youtube.com/playlist?list=PLzyDJLW7kmXRd3jcl76PfBa6UTHlu5Pfx'
      }
    ],
    youtube: 'https://www.youtube.com/playlist?list=PLzyDJLW7kmXRd3jcl76PfBa6UTHlu5Pfx',
    github: 'https://github.com/balabatn/hdl'
  },
  netsec: {
    title: 'Computer Networks & Security – CPEP 323',
    description: 'This subject introduces the concepts of computer networking, protocols, and security fundamentals.',
    projects: [
      {
        title: 'Semi Final',
        description: 'Activities',
        link: 'https://www.youtube.com/playlist?list=PLzyDJLW7kmXRDfPgkTZmH6mGt81oZXmWU'
      },
      {
        title: 'Final Networking',
        description: 'Ub Days Attendance System',
        link: 'https://www.youtube.com/playlist?list=PLzyDJLW7kmXRDfPgkTZmH6mGt81oZXmWU'
      }
    ],
    youtube: 'https://www.youtube.com/playlist?list=PLzyDJLW7kmXRDfPgkTZmH6mGt81oZXmWU',
    github: 'https://github.com/balabatn/networking'
  },
  cognate: {
    title: 'CpE Cognate/Track Course 1 – CPEP 324',
    description: 'Covers specialized topics in the Computer Engineering track, focusing on embedded systems and software design.',
    projects: [
      {
        title: 'Semi Final Activities',
        description: 'Activities.',
        link: 'https://github.com/balabatn/machineVision/tree/main'
      },
      {
        title: 'Pose Detection Classification FINALS',
        description: 'Final Project.',
        link: 'https://youtu.be/_RK7UpDbMFo'
      }
    ],
    youtube: 'https://youtu.be/_RK7UpDbMFo',
    github: 'https://github.com/balabatn/machineVision/tree/main/FINAL'
  },
  micro: {
    title: 'Microprocessors – CPEP 327',
    description: 'Study of microprocessor architecture, assembly programming, and interfacing techniques.',
    projects: [
      {
        title: 'Sumobot%HockeyBot',
        description: 'Sumobot- HockeyBot using ESP32.',
        link: 'https://youtu.be/KkxJYRfeFB8'
      }
    ],
    youtube: 'https://youtu.be/KkxJYRfeFB8',
    github: 'https://github.com/balabatn/micro'
  }
};

function openModal(subjectKey) {
  const subject = subjects[subjectKey];
  if (!subject) return;

  let html = `<h2>${subject.title}</h2>`;
  html += `<p>${subject.description}</p>`;
  html += `<h3>Related Projects:</h3>`;
  html += `<ul>`;
  subject.projects.forEach(project => {
    html += `<li><strong>${project.title}</strong>: ${project.description}`;
    if (project.link) {
      html += ` - <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>`;
    }
    html += `</li>`;
  });
  html += `</ul>`;

  // Add YouTube and GitHub links
  html += `<div class="links">`;
  if(subject.youtube) {
    html += `<a href="${subject.youtube}" target="_blank" rel="noopener noreferrer" class="btn btn-youtube">🎥 YouTube</a> `;
  }
  if(subject.github) {
    html += `<a href="${subject.github}" target="_blank" rel="noopener noreferrer" class="btn btn-github">🐙 GitHub</a>`;
  }
  html += `</div>`;

  modalBody.innerHTML = html;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('hidden');
  // Optional: Remove from DOM after transition for performance
  setTimeout(() => loadingScreen.remove(), 700);
});
