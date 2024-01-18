import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import styles from "./CandidateEvaluationSummaryF.module.css";

const CandidateEvaluationSummaryF = () => {
  return (
    <div className={styles.candidateEvaluationSummaryF}>
      <div className={styles.headerNavBar}>
        <img
          className={styles.taizoLogoNavbarIcon}
          alt=""
          src="/taizo-logonavbar.svg"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.formDiv1}>
          <b className={styles.candidateEvaluationSummary}>
            Candidate Evaluation Summary
          </b>
          <div className={styles.formDiv2}>
            <div className={styles.formDiv3InputFields}>
              <div className={styles.candidateNameAge}>
                <div className={styles.candidateName}>
                  <div className={styles.coreSkillSet}>Candidate Name</div>
                  <div className={styles.candidateName2}>
                    <FormControl
                      className={styles.parent}
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "104px",
                        height: "38px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "38px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "38px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "38px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "38px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="success" />
                      <Select color="success" disableUnderline displayEmpty>
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Miss">Miss</MenuItem>
                        <MenuItem value="Mrs">Mrs</MenuItem>
                        <MenuItem value="Ms">Ms</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <TextField
                      className={styles.candidateName3}
                      color="success"
                      placeholder="Enter candidate name"
                      variant="outlined"
                      sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                    />
                  </div>
                </div>
                <div className={styles.candidateName}>
                  <div className={styles.coreSkillSet}>Age</div>
                  <div className={styles.age2}>
                    <TextField
                      className={styles.candidateName3}
                      color="success"
                      placeholder="00"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                    />
                    <div className={styles.years}>Years</div>
                  </div>
                </div>
              </div>
              <div className={styles.candidateNameAge}>
                <div className={styles.candidateName}>
                  <div className={styles.coreSkillSet}>Looking for?</div>
                  <TextField
                    className={styles.lookingFor2}
                    color="success"
                    placeholder="Looking for?"
                    variant="outlined"
                    type="text"
                    sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                  />
                </div>
                <div className={styles.candidateName}>
                  <div className={styles.coreSkillSet}>Years of Experience</div>
                  <div className={styles.age2}>
                    <TextField
                      className={styles.candidateName3}
                      color="success"
                      placeholder="00"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                    />
                    <div className={styles.years}>Years</div>
                  </div>
                </div>
              </div>
              <div className={styles.candidateNameAge}>
                <div className={styles.candidateName}>
                  <div className={styles.coreSkillSet}>
                    Previous Designation
                  </div>
                  <TextField
                    className={styles.lookingFor2}
                    color="success"
                    placeholder="Enter Previous Designation"
                    variant="outlined"
                    type="text"
                    sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                  />
                </div>
                <div className={styles.candidateName}>
                  <div className={styles.coreSkillSet}>Qualification</div>
                  <TextField
                    className={styles.lookingFor2}
                    color="success"
                    placeholder="Enter Qualification"
                    variant="outlined"
                    type="text"
                    sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                  />
                </div>
              </div>
              <div className={styles.coreSkillSetMatchingJd}>
                <div className={styles.coreSkillSet}>
                  Core skill set matching JD
                </div>
                <div className={styles.coreSkillSetMatchingJd1}>
                  <div className={styles.coreSkillSetMatchingJd2}>
                    <TextField
                      className={styles.lookingFor2}
                      color="success"
                      placeholder="Enter Core skill set matching JD"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                    />
                    <div className={styles.coreSkillSetMatchingJdTex}>
                      <div className={styles.coreSkillSetMatchingJdTex1}>
                        <div className={styles.coreSkillSet1}>
                          Core skill set matching JD text 1
                        </div>
                        <img
                          className={styles.closeRoundIcon1}
                          alt=""
                          src="/closeroundicon-1.svg"
                        />
                      </div>
                      <div className={styles.coreSkillSetMatchingJdTex1}>
                        <div className={styles.coreSkillSet1}>
                          Core skill set matching JD text 2
                        </div>
                        <img
                          className={styles.closeRoundIcon1}
                          alt=""
                          src="/closeroundicon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <button className={styles.coreSkillSetMatchingJdDon}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/core-skill-set-matching-jd-done-ic.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.coreSkillSetMatchingJd}>
                <div className={styles.coreSkillSet}>Skills</div>
                <TextField
                  className={styles.lookingFor2}
                  color="primary"
                  placeholder="Enter Skills"
                  variant="outlined"
                  type="text"
                  sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                />
              </div>
              <div className={styles.coreSkillSetMatchingJd}>
                <div className={styles.coreSkillSet}>Certifications</div>
                <div className={styles.coreSkillSetMatchingJd1}>
                  <div className={styles.coreSkillSetMatchingJd2}>
                    <TextField
                      className={styles.lookingFor2}
                      color="success"
                      placeholder="Enter certifications details"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "38px" } }}
                    />
                    <div className={styles.coreSkillSetMatchingJdTex}>
                      <div className={styles.coreSkillSetMatchingJdTex1}>
                        <div className={styles.coreSkillSet1}>
                          certifications detail 1
                        </div>
                        <img
                          className={styles.closeRoundIcon1}
                          alt=""
                          src="/closeroundicon-1.svg"
                        />
                      </div>
                      <div className={styles.coreSkillSetMatchingJdTex1}>
                        <div className={styles.coreSkillSet1}>
                          certifications detail 2
                        </div>
                        <img
                          className={styles.closeRoundIcon1}
                          alt=""
                          src="/closeroundicon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <button className={styles.coreSkillSetMatchingJdDon}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/core-skill-set-matching-jd-done-ic.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.coreSkillSetMatchingJd}>
                <div className={styles.coreSkillSet}>Taizo’s suggestion</div>
                <TextField
                  className={styles.taizosSuggestion2}
                  color="success"
                  rows={3}
                  placeholder="Enter Taizo's suggestion"
                  variant="outlined"
                  multiline
                />
              </div>
              <div className={styles.taizoScore}>
                <div className={styles.coreSkillSet}>Taizo score</div>
                <FormControl
                  className={styles.taizosSuggestion2}
                  variant="outlined"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: "387px",
                    height: "38px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "38px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "38px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "38px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "38px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="success" />
                  <Select color="success" disableUnderline displayEmpty>
                    <MenuItem value="0.5">0.5</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="1.5">1.5</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="2.5">2.5</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="3.5">3.5</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="4.5">4.5</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="5.5">5.5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="6.5">6.5</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="7.5">7.5</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="8.5">8.5</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="9.5">9.5</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <button className={styles.generateReport}>
              <div className={styles.generateReport1}>
                <div className={styles.generateSummary}>Generate Summary</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateEvaluationSummaryF;
